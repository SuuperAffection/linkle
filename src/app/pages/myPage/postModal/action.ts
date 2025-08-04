import { ServerExeption } from "@/lib/server/util/exeption";
import { ActionType } from "./reducer";
import { PostAPI } from "@/app/api/post/type";

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

    export async function post(dispatch: React.Dispatch<ActionType>,
        data: {
            title: string,
            mainText: string,
            techs: string,
            contactTool: string,
            position: string
        }
    ) {
        dispatch({
            type: 'POST_REQUEST'
        })

        try {

            const json: PostAPI.POST.Request = {
                title: data.title,
                mainText: data.mainText,
                techs: data.techs,
                contactTool: data.contactTool,
                position: data.position
            }

            await fetch(
                `/api/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            })

            dispatch({
                type: 'POST_SUCCESS'
            })

        } catch (e) {
            dispatch({
                type: 'POST_FAILURE'
            })
            console.log(e)

            throw new ServerExeption()
        }
    }
}