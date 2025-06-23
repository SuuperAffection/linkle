
export namespace Post {
    export type Type = {
        id?: number
        title: string
        mainText: string
        techs: string
        contactTool: string
        position: string
        expiration: Date,
        deleteFlag: boolean
        createUser?: number
        updateUser?: number
        creation?: Date
        modification?: Date
        version: number
    }

    export function create(): Post.Type {
        return {
            title: '',
            mainText: ``,
            techs: '',
            contactTool: '',
            position: '',
            expiration: new Date(),
            deleteFlag: false,
            version: 0
        }
    }
}