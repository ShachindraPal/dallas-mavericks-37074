export interface ErrorState {
  errorDetails: Error | undefined;
}

export const initialState: ErrorState = {
  errorDetails: undefined
}
