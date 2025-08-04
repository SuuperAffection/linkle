import { NextRequest, NextResponse } from "next/server";
import { EditInfoAPI } from "./type";
import { ErrorInfo } from "react";
import { ServerHandler } from "@/lib/server/util/db_util";
import { StringUtils } from "@/lib/common/util/string_utils";
import { SessionDAO } from "@/lib/server/dao/session";
import { AuthenticationExeption, ServerExeption } from "@/lib/server/util/exeption";
import { UserAccountDAO } from "@/lib/server/dao/user_account";
import { User_Account } from "@/lib/server/entity/user_account";
import { User_AccountConverter } from "@/lib/server/converter/user_accoun";

export const dynamic = 'force-dynamic'

export async function GET(
    req: NextRequest
): Promise<NextResponse<EditInfoAPI.GET.Responce | ErrorInfo>> {
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

        if (userEntity === undefined) {
            throw new ServerExeption()
        }

        return NextResponse.json({
            user: User_AccountConverter.toVO(userEntity)
        })
    })
}

export async function POST(
    req: NextRequest
): Promise<NextResponse<EditInfoAPI.POST.Responce | ErrorInfo>> {
    return ServerHandler.transaction(async (client) => {

        const token = StringUtils.nvl(req.cookies.get('token')?.value)
        const user = await SessionDAO.checkToken(client, token)

        if (user === undefined) {
            throw new AuthenticationExeption()
        }

        if (user.fkUser === undefined) {
            throw new ServerExeption()
        }

        const json: EditInfoAPI.POST.Request = await req.json()

        const entity = User_Account.create()

        User_AccountConverter.apply(json.userData, entity)

        if (json.userData.id === user.fkUser) {
            if (await UserAccountDAO.update(client, entity) === 0) {
                throw new ServerExeption()
            }
        }

        return NextResponse.json({

        })

    })
}