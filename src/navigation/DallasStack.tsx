import React from "react"
import HomeScreen from "../Home"
import SplashScreen from "../Splash"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator()

const DallasStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="splash"
    >
      <Stack.Screen name ="splash" component={SplashScreen}/>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  )
}




export { DallasStack }
