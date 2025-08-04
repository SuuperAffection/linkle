import { PostVO } from "@/lib/common/vo/post"

export namespace HomeAPI {
    export namespace GET {
        export type Request = {
            keyword: string
            techs: string
            position: string
        }

        export type Response = {
            posts: PostVO.Type[]
        }
    }
}