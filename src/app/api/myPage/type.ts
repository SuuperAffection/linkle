import { PostVO } from "@/lib/common/vo/post"
import { User_AccountVO } from "@/lib/common/vo/user_account"

export namespace MyPageAPI {
    export namespace GET {
        export type Request = {

        }

        export type Responce = {
            user: User_AccountVO.Type
            myPost: PostVO.Type[]
        }
    }
}