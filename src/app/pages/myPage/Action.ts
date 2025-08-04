import { ServerExeption } from "@/lib/server/util/exeption";
import { ActionType } from "./reducer";
import { MyPageAPI } from "@/app/api/myPage/type";

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

    export async function getMyPost(dispatch: React.Dispatch<ActionType>) {
        dispatch({
            type: 'GET_MYPAGE_REQUEST'
        })

        try {

            const res = await fetch(
                `/api/myPage`, {
                method: 'GET',
                cache: 'no-store'
            })

            const result: MyPageAPI.GET.Responce = await res.json()

            dispatch({
                type: 'GET_MYPAGE_SUCCERSS',
                payload: {
                    user: result.user,
                    myPost: result.myPost
                }
            })

        } catch (e) {
            dispatch({
                type: 'GET_MYPAGE_FAILURE'
            })
            console.log(e)
            throw new ServerExeption()
        }
    }
}