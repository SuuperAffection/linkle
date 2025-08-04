export type ActionType =
    {
        type: 'EDIT_FORM'
        payload: {
            targetName: string
            value: any
        }
    } |
    {
        type: 'POST_REQUEST'
    } |
    {
        type: 'POST_SUCCESS'
    } |
    {
        type: 'POST_FAILURE'
    }

export type State = {
    isWaiting: boolean

    title: string
    mainText: string
    techs: string
    contactTool: string
    position: string
}

export function defaultState(): State {
    return {
        isWaiting: false,

        title: '',
        mainText: ``,
        techs: '',
        contactTool: '',
        position: ''
    }
}

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        case 'EDIT_FORM': {
            switch (action.payload.targetName) {
                case 'title': return {
                    ...state,
                    title: action.payload.value
                }
                case 'mainText': return {
                    ...state,
                    mainText: action.payload.value
                }
                case 'techs': return {
                    ...state,
                    techs: action.payload.value
                }
                case 'contactTool': return {
                    ...state,
                    contactTool: action.payload.value
                }
                case 'position': return {
                    ...state,
                    position: action.payload.value
                }
            }
        }
        case 'POST_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'POST_SUCCESS': return {
            ...state,
            isWaiting: false
        }
        case 'POST_FAILURE': return {
            ...state,
            isWaiting: false
        }
    }

    return state
}