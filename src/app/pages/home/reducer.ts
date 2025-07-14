import { PostVO } from "@/lib/common/vo/post"

export type ActionType =
    {
        type: 'GET_POST_REQUEST'
    } |
    {
        type: 'GET_POST_SUCCESS'
        payload: {
            posts: PostVO.Type[]
        }
    } |
    {
        type: 'GET_POST_FAILURE'
    }

export type State = {
    isWaiting: boolean
    posts: PostVO.Type[]
}

export function defaultState(): State {
    return {
        isWaiting: false,
        posts: []
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        case 'GET_POST_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'GET_POST_SUCCESS': return {
            ...state,
            isWaiting: false,
            posts: action.payload.posts
        }
        case 'GET_POST_FAILURE': return {
            ...state,
            isWaiting: false
        }
    }
}