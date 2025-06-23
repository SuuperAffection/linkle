export namespace PostVO {
    export type Type = {
        id?: number,
        title: string,
        mainText: string,
        techs: string
        contactTool: string,
        position: string,
        expiration: string,
        deleteFlag: boolean,
        createUser?: number
        updateUser?: number
        creation: string
        modification: string
        version: number
    }

    export function create(): PostVO.Type {
        return {
            title: '',
            mainText: ``,
            techs: '',
            contactTool: '',
            position: '',
            expiration: '',
            deleteFlag: false,
            creation: '',
            modification: '',
            version: 0
        }
    }
}