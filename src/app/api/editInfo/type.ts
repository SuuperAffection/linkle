import { User_AccountVO } from "@/lib/common/vo/user_account"

export namespace EditInfoAPI {
    export namespace GET {
        export type Request = {

        }

        export type Responce = {
            user: User_AccountVO.Type
        }
    }

    export namespace POST {
        export type Request = {
            userData: User_AccountVO.Type
        }

        export type Responce = {

        }
    }
}