import { PostVO } from "@/lib/common/vo/post"

export namespace HomeAPI {
    export namespace GET {
        export type Request = {}

        export type Response = {
            posts: PostVO.Type[]
        }
    }
}