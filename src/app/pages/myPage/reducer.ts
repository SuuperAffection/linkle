import { PostVO } from "@/lib/common/vo/post"
import { User_AccountVO } from "@/lib/common/vo/user_account"

export type ActionType =
    {
        type: 'EDIT_FORM'
        payload: {
            targetName: string
            value: any
        }
    } |
    {
        type: 'GET_MYPAGE_REQUEST'
    } |
    {
        type: 'GET_MYPAGE_SUCCERSS'
        payload: {
            user: User_AccountVO.Type
            myPost: PostVO.Type[]
        }
    } |
    {
        type: 'GET_MYPAGE_FAILURE'
    }

export type State = {
    isWaiting: boolean

    post: boolean
    user: User_AccountVO.Type
    myPost: PostVO.Type[]
}

export function defaultState(): State {
    return {
        isWaiting: false,

        post: false,
        user: User_AccountVO.create(),
        myPost: []
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'post': return {
                    ...state,
                    post: !state.post
                }
            }
        }
        case 'GET_MYPAGE_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'GET_MYPAGE_SUCCERSS': return {
            ...state,
            isWaiting: false,
            user: action.payload.user,
            myPost: action.payload.myPost
        }
        case 'GET_MYPAGE_FAILURE': return {
            ...state,
            isWaiting: false
        }
    }

    return state
}