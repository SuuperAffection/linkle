export namespace User_Account {
    export type Type = {
        id?: number
        displayName: string
        userId: string
        pw: string
        techs?: string
        department?: string
        contact?: string
        comment?: string
        deleteFlag: boolean
        createUser?: number
        updateUser?: number
        creation?: Date
        modification?: Date
        version: number
    }

    export function create(): User_Account.Type {
        return {
            displayName: '',
            userId: '',
            pw: '',
            techs: '',
            department: '',
            contact: '',
            comment: '',
            deleteFlag: false,
            version: 0
        }
    }
}
