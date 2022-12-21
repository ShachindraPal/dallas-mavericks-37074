import React from "react"

type ErrorBoundaryStateType = {
  error: null
}

interface ErrorBoundaryProps {
  show: boolean;
  FallbackComponent?: React.ComponentType;
  onError?: (error: any, errorInfo: any) => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state: ErrorBoundaryStateType = {
    error: null
  }

  static getDerivedStateFromError(error: any) {
    return { error: error }
  }

  /**
   * The error can be handled by the error handler in a base component
   * or it can be used to log with a logger service.
   * @param error
   * @param errorInfo
   */
  componentDidCatch(error: any, errorInfo: any) {
    this.props.onError?.(error, errorInfo)
  }

  render() {
    const { FallbackComponent, children } = this.props
    return this.props.show && this.state.error ? (
      FallbackComponent ? (
        <FallbackComponent />
      ) : null
    ) : (
      children
    )
  }
}

export default ErrorBoundary
