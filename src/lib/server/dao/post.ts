import { ClientBase } from "pg";
import SQL, { SQLStatement } from "sql-template-strings";
import { Post } from "../entity/post";

export namespace PostDAO {
    export function baseSQL(): SQLStatement {
        return SQL`
            SELECT
                post.id AS "id",
                post.title AS "title",
                post.mainText AS "mainText",
                post.techs AS "techs",
                post.contactTool AS "contactTool",
                post.position AS "position",
                post.expiration AS "expiration",
                post.deleteFlag AS "deleteFlag",
                post.createUser AS "createUser",
                post.updateUser AS "updateUser",
                post.creation AS "creation",
                post.modification AS "modification",
                post.version AS "version"
            FROM
                post
        `
    }

    export async function getSequenceId(client: ClientBase): Promise<number> {
        const result = await client.query(SQL`
            SELECT NEXTVAL('PostSeq') AS "id"
            `)

        return result.rows[0].id
    }

    export async function getByID(client: ClientBase, id: number): Promise<Post.Type | undefined> {
        const result = await client.query(baseSQL().append(SQL`
                WHERE
                    post.id = ${id} AND
                    post.deleteFlag = FALSE
            `))

        return result.rows[0]
    }

    export async function getPosts(client: ClientBase, userId: number): Promise<Post.Type[]> {
        const result = await client.query(baseSQL().append(SQL`
                WHERE
                    post.createUser != ${userId} AND
                    post.deleteFlag = FALSE
                    ORDER BY post.creation DESC
            `))

        return result.rows
    }

    export async function searchPosts(client: ClientBase, userId: number, keyword: string, techs: string, position: string): Promise<Post.Type[]> {
        const sql = baseSQL()

        if (keyword !== '') {
            sql.append(SQL`
                WHERE
                    post.title LIKE ${`%${keyword}%`} AND
                    post.mainText LIKE ${`%${keyword}%`} AND
                    post.techs LIKE ${`%${keyword}%`} AND
                    post.position LIKE ${`%${keyword}%`} AND
                    post.createUser != ${userId} AND
                    post.deleteFlag = FALSE
                    ORDER BY post.creation DESC
                `)
        } else {
            sql.append(SQL`WHERE`)
            if (techs !== '') {
                sql.append(SQL`
                    post.techs LIKE ${`%${techs}%`} AND
                    `)
            }

            if (position !== '') {
                sql.append(SQL`
                    post.position LIKE ${`%${position}%`} AND
                    `)
            }

            sql.append(SQL`
                post.createUser != ${userId} AND
                post.deleteFlag = FALSE
                ORDER BY post.creation DESC
                `)
        }

        const result = await client.query(sql)

        return result.rows
    }

    export async function getMyPosts(client: ClientBase, userId: number): Promise<Post.Type[]> {
        const result = await client.query(baseSQL().append(SQL`
                WHERE
                    post.createUser = ${userId} AND
                    post.deleteFlag = FALSE
                    ORDER BY post.creation DESC
            `))

        return result.rows
    }

    export async function insert(client: ClientBase, entity: Post.Type): Promise<number> {
        const result = await client.query(SQL`
            INSERT INTO Post (
                id,
                title,
                mainText,
                techs,
                contactTool,
                position,
                expiration,
                deleteFlag,
                createUser,
                updateUser,
                creation,
                modification,
                version
            ) VALUES (
                ${entity.id},
                ${entity.title},
                ${entity.mainText},
                ${entity.techs},
                ${entity.contactTool},
                ${entity.position},
                NOW(),
                ${entity.deleteFlag},
                ${entity.createUser},
                ${entity.updateUser},
                NOW(),
                NOW(),
                0
            )
        `)

        return result.rowCount as number
    }
}