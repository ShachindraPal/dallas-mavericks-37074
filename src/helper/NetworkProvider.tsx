import NetInfo, { NetInfoState } from "@react-native-community/netinfo"
import React, { useCallback, useEffect, useState } from "react"

export interface NetworkInfoState {
  isConnected: boolean;
}

const initialNetworkInfoState: NetworkInfoState = {
  isConnected: true
}
const NetworkContext = React.createContext(initialNetworkInfoState)

const NetworkProvider: React.FC = ({ children }) => {
  const [networkInfoState, setNetworkInfoState] = useState(
    initialNetworkInfoState
  )

  const handleNetworkInfoStateChange = useCallback(
    (netInfoState: NetInfoState) => {
      const isConnected: boolean =
        netInfoState.isConnected && (netInfoState.isInternetReachable ?? true)
      setNetworkInfoState({
        isConnected
      })
    },
    [networkInfoState, setNetworkInfoState]
  )

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      if (state) {
        handleNetworkInfoStateChange(state)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <NetworkContext.Provider value={networkInfoState}>
      {children}
    </NetworkContext.Provider>
  )
}

const useNetworkInfoState = (): NetworkInfoState => {
  return React.useContext(NetworkContext)
}

export { NetworkProvider as default, useNetworkInfoState }
