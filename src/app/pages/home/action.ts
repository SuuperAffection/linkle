import { ActionType } from "./reduser";

export namespace Action{
  export function editForm(dispatch: React.Dispatch<ActionType>, targetName: string, value: any) {
    dispatch({
      type: 'EDIT_FORM',
      payload: {
        targetName,
        value
      }
    })
  }
} 