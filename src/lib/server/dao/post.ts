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
}