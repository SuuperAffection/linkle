import { NextRequest, NextResponse } from "next/server";
import { MyPageAPI } from "./type";
import { ErrorInfo } from "react";
import { ServerHandler } from "@/lib/server/util/db_util";
import { SessionDAO } from "@/lib/server/dao/session";
import { StringUtils } from "@/lib/common/util/string_utils";
import { AuthenticationExeption, ServerExeption } from "@/lib/server/util/exeption";
import { PostDAO } from "@/lib/server/dao/post";
import { PostConverter } from "@/lib/server/converter/post";
import { UserAccountDAO } from "@/lib/server/dao/user_account";
import { User_AccountConverter } from "@/lib/server/converter/user_accoun";

export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest
): Promise<NextResponse<MyPageAPI.GET.Responce | ErrorInfo>> {
    return ServerHandler.transaction(async (client) => {
        const token = StringUtils.nvl(req.cookies.get('token')?.value)
        const user = await SessionDAO.checkToken(client, token)

        if (user === undefined) {
            throw new AuthenticationExeption()
        }

        if (user.fkUser === undefined) {
            throw new ServerExeption()
        }

        const userEntity = await UserAccountDAO.getByID(client, user.fkUser)
        const postEntity = await PostDAO.getMyPosts(client, user.fkUser)

        if (userEntity === undefined) {
            throw new ServerExeption()
        }

        return NextResponse.json({
            user: User_AccountConverter.toVO(userEntity),
            myPost: postEntity.map((v) => PostConverter.toVO(v))
        })
    })
}