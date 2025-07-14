import { NextRequest, NextResponse } from "next/server";
import { HomeAPI } from "./type";
import { ErrorInfo } from "react";
import { ServerHandler } from "@/lib/server/util/db_util";
import { StringUtils } from "@/lib/common/util/string_utils";
import { SessionDAO } from "@/lib/server/dao/session";
import { PostDAO } from "@/lib/server/dao/post";
import { AuthenticationExeption, ServerExeption } from "@/lib/server/util/exeption";
import { PostConverter } from "@/lib/server/converter/post";

export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest
): Promise<NextResponse<HomeAPI.GET.Response | ErrorInfo>> {
    return ServerHandler.transaction(async (client) => {
        const token = StringUtils.nvl(req.cookies.get('token')?.value)
        const user = await SessionDAO.checkToken(client, token)

        if (user === undefined) {
            throw new AuthenticationExeption()
        }

        if (user.fkUser === undefined) {
            throw new ServerExeption()
        }

        const posts = await PostDAO.getPosts(client, user.fkUser)

        return NextResponse.json({
            posts: posts.map((v) => PostConverter.toVO(v))
        })
    })
}