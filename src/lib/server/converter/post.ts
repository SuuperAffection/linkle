import { PostVO } from "@/lib/common/vo/post";
import { Post } from "../entity/post";

export namespace PostConverter {
    export function toVO(src: Post.Type): PostVO.Type {
        return {
            id: src.id,
            title: src.title,
            mainText: src.mainText,
            techs: src.techs,
            contactTool: src.contactTool,
            position: src.position,
            expiration: src.expiration.toISOString(),
            deleteFlag: src.deleteFlag,
            createUser: src.createUser,
            updateUser: src.updateUser,
            creation: src.creation ? src.creation.toISOString() : '',
            modification: src.modification ? src.modification.toISOString() : '',
            version: src.version
        }
    }

    export function apply(src: PostVO.Type, dest: Post.Type) {
        dest.id = src.id,
            dest.title = src.title,
            dest.mainText = src.mainText,
            dest.techs = src.techs,
            dest.contactTool = src.contactTool,
            dest.position = src.position,
            dest.expiration = new Date(src.expiration),
            dest.deleteFlag = src.deleteFlag,
            dest.version = src.version
    }
}