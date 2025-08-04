import { HomeAPI } from "@/app/api/home/type";
import { ActionType } from "./reducer";

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

    export async function getPost(dispatch: React.Dispatch<ActionType>, keyword: string, techs: string, position: string) {
        dispatch({
            type: 'GET_POST_REQUEST'
        })

        try {

            const json: HomeAPI.GET.Request = {
                keyword,
                techs,
                position
            }

            const params = new URLSearchParams(json)

            const res = await fetch(
                `/api/home?${params.toString()}`, {
                method: 'GET',
                cache: 'no-store'
            }
            )

            const result: HomeAPI.GET.Response = await res.json()

            dispatch({
                type: 'GET_POST_SUCCESS',
                payload: {
                    posts: result.posts === undefined ? [] : result.posts
                }
            })

        } catch (e) {
            dispatch({
                type: 'GET_POST_FAILURE'
            })
            console.log(e)
            throw e
        }
    }
}