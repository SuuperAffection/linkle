import { NextRequest, NextResponse } from "next/server";
import { PostAPI } from "./type";
import { ErrorInfo } from "react";
import { ServerHandler } from "@/lib/server/util/db_util";
import { StringUtils } from "@/lib/common/util/string_utils";
import { SessionDAO } from "@/lib/server/dao/session";
import { AuthenticationExeption, ServerExeption } from "@/lib/server/util/exeption";
import { Post } from "@/lib/server/entity/post";
import { PostDAO } from "@/lib/server/dao/post";

export const dynamic = 'force-dynamic'

export async function POST(
    req: NextRequest
): Promise<NextResponse<PostAPI.POST.Responce | ErrorInfo>> {
    return ServerHandler.transaction(async (client) => {

        const token = StringUtils.nvl(req.cookies.get('token')?.value)
        const user = await SessionDAO.checkToken(client, token)

        if (user === undefined) {
            throw new AuthenticationExeption()
        }

        if (user.fkUser === undefined) {
            throw new ServerExeption()
        }

        const data: Post.Type = await req.json()

        const entity = Post.create()

        entity.id = await PostDAO.getSequenceId(client)
        entity.title = data.title
        entity.mainText = data.mainText
        entity.techs = data.techs
        entity.contactTool = data.contactTool
        entity.position = data.position
        entity.createUser = user.fkUser
        entity.updateUser = user.fkUser

        if (await PostDAO.insert(client, entity) === 0) {
            throw new ServerExeption()
        }

        return NextResponse.json({})
    })
}