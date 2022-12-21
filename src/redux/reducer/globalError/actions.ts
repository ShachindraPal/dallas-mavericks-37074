import { RootState } from ".."
import { Action } from "../../action/types"

import { ErrorState, initialState } from "./state"

// CONST
export const SET_ERROR = "global/setError"
export const CLEAR_ERROR = "global/clearError"

// ACTIONS
export function onError(errorDetails: Error | undefined): Action {
  return {
    type: SET_ERROR,
    payload: errorDetails
  }
}

export function onClearError(): { type: string } {
  return {
    type: CLEAR_ERROR
  }
}

// REDUCERS
export default (state = initialState, action: Action): ErrorState => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorDetails: action.payload
      }
    case CLEAR_ERROR:
      return initialState
    default:
      return state
  }
}

// SELECTORS
export const selectErrorState = (state: RootState): Error | undefined =>
  state.global.errorDetails
