import { combineReducers } from "redux"
import globalReducer from "./globalError/actions"

export const rootReducer = combineReducers({
  global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>
