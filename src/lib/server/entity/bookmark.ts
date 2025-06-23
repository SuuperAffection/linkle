export namespace Bookmark {
    export type Type = {
        id?: number,
        fkUser: number,
        fkPost: number,
        createUser?: number,
        updateUser?: number,
        creation?: number,
        modification?: number
    }

    export function create(): Bookmark.Type {
        return {
            fkUser: 0,
            fkPost: 0,
        }
    }
}