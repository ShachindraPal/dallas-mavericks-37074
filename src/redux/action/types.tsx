import { Action as BaseAction } from "redux"

export interface Action extends BaseAction {
  payload?: any | Error;
  error?: boolean;
}
