// Actionの監視
export type ActionType = {
  type: 'EDIT_FORM'
  payload: {
    targetName: string
    value: any
  }
}

// 内部状態の型定義
export type State = {
  keyword: string
  techs: string
  tool: string
  position: string
  expiration: string
}

// 初期状態の定義
export function defaultState(): State {
  return {
    keyword: '',
    techs: '',
    tool: '',
    position: '',
    expiration: ''
  }
}

export function reducer(state: State, action: ActionType): State {
  switch (action.type) {
    // 入力値が変わった時に動く
    case 'EDIT_FORM': {
      switch (action.payload.targetName) {
        case 'keyword': return{
          // 今の state を取得・変わったとこだけ変更
          ...state,
          keyword: action.payload.value
        }
        case 'techs': return {
          ...state,
          techs: action.payload.value
        }
        case 'tool': return {
          ...state,
          tool: action.payload.value
        }
        case 'position': return {
          ...state,
          position: action.payload.value
        }
        case 'expiration': return {
          ...state,
          expiration: action.payload.value
        }
        case 'clear': return {
          // 全ての入力値をクリアする
          ...state,
          keyword: '',
          techs: '',
          tool: '',
          position: '',
          expiration: ''
        }
      }
    }
  }
  return state
}