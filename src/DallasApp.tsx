/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import R from './res';

import React, { useEffect } from "react"
import { StatusBar,View,Text } from "react-native"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./redux/store"
import { LogBox } from "react-native"
import { DallasStack } from "./navigation/DallasStack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import NetworkProvider from "./helper/NetworkProvider"




LogBox.ignoreAllLogs()

const DallasApp = () => {
//   useEffect(() => {
//     SplashScreen.hide()
//   }, [])

return (
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <SafeAreaProvider>
      <NetworkProvider>
        <StatusBar
          backgroundColor={"#000000"}
          barStyle="dark-content"
        />
        <NavigationContainer theme={DefaultTheme}>
          <DallasStack />
        </NavigationContainer>
      </NetworkProvider>
    </SafeAreaProvider>
  </PersistGate>
</Provider>
    
  )
}

export default DallasApp
