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
        type: 'GET_USER_REQUEST'
    } |
    {
        type: 'GET_USER_SUCCESS'
        payload: {
            user: User_AccountVO.Type
        }
    } |
    {
        type: 'GET_USER_FAILURE'
    } |
    {
        type: 'SAVE_USER_REQUEST'
    } |
    {
        type: 'SAVE_USER_SUCCESS'
    } |
    {
        type: 'SAVE_USER_FAILURE'
    }

export type State = {
    isWaiting: boolean

    user: User_AccountVO.Type
}

export function defaultState(): State {
    return {
        isWaiting: false,

        user: User_AccountVO.create()
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'displayName': return {
                    ...state,
                    user: {
                        ...state.user,
                        displayName: action.payload.value
                    }
                }
                case 'department': return {
                    ...state,
                    user: {
                        ...state.user,
                        department: action.payload.value
                    }
                }
                case 'contact': return {
                    ...state,
                    user: {
                        ...state.user,
                        contact: action.payload.value
                    }
                }
                case 'techs': return {
                    ...state,
                    user: {
                        ...state.user,
                        techs: action.payload.value
                    }
                }
                case 'comment': return {
                    ...state,
                    user: {
                        ...state.user,
                        comment: action.payload.value
                    }
                }
            }
        }
        case 'GET_USER_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'GET_USER_SUCCESS': return {
            ...state,
            isWaiting: false,
            user: action.payload.user
        }
        case 'GET_USER_FAILURE': return {
            ...state,
            isWaiting: false
        }
        case 'SAVE_USER_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'SAVE_USER_SUCCESS': return {
            ...state,
            isWaiting: false
        }
        case 'SAVE_USER_FAILURE': return {
            ...state,
            isWaiting: false
        }
    }
    return state
}