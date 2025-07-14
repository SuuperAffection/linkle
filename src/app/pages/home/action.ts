import { HomeAPI } from "@/app/api/home/type";
import { ActionType } from "./reducer";

export namespace Action {

    export async function getPost(dispatch: React.Dispatch<ActionType>) {
        dispatch({
            type: 'GET_POST_REQUEST'
        })

        try {

            const res = await fetch(
                `/api/home`, {
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