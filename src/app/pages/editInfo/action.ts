import { User_AccountVO } from "@/lib/common/vo/user_account";
import { ActionType } from "./reducer";
import { ServerExeption } from "@/lib/server/util/exeption";
import { EditInfoAPI } from "@/app/api/editInfo/type";

export namespace Action {
    export async function editForm(dispatch: React.Dispatch<ActionType>, targetName: string, value: any) {
        dispatch({
            type: 'EDIT_FORM',
            payload: {
                targetName,
                value
            }
        })
    }

    export async function getUserData(dispatch: React.Dispatch<ActionType>) {
        dispatch({
            type: 'GET_USER_REQUEST'
        })

        try {

            const res = await fetch(
                `/api/editInfo`, {
                method: 'GET',
                cache: 'no-store'
            }
            )

            const result: EditInfoAPI.GET.Responce = await res.json()

            dispatch({
                type: 'GET_USER_SUCCESS',
                payload: {
                    user: result.user
                }
            })

        } catch (e) {
            dispatch({
                type: 'GET_USER_FAILURE'
            })
            console.log(e)
            throw new ServerExeption()
        }
    }

    export async function saveUserData(dispatch: React.Dispatch<ActionType>, userData: User_AccountVO.Type) {
        dispatch({
            type: 'SAVE_USER_REQUEST'
        })

        try {

            const json: EditInfoAPI.POST.Request = {
                userData
            }

            await fetch(
                `/api/editInfo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }
            )

            dispatch({
                type: 'SAVE_USER_SUCCESS'
            })

        } catch (e) {
            dispatch({
                type: 'SAVE_USER_FAILURE'
            })
            console.log(e)
            throw new ServerExeption()
        }
    }
}