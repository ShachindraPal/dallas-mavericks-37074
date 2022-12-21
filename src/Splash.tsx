import React from 'react';
import { Text, View } from 'react-native';
import useAppNavigator from "../src/navigation/useAppNavigator"


const Splash = () => {
  const { navigateTo } = useAppNavigator()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text onPress={()=>navigateTo("home")}>Hello, world!</Text>
    </View>
  )
}
export default Splash;