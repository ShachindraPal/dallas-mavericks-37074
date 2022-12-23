import { Formik } from "formik"
import React, { memo } from "react"
import { Alert, Image, Keyboard, Text, View } from "react-native"
import R from "res"
import Images from "res/Images"
import BaseScreen, { BaseScreenInjectedProps } from "src/base/BaseScreen"

const Home: React.FC<BaseScreenInjectedProps> = () => {
  const isDisabled = (values: { email: any }, isValid: any) =>
    !(values.email && isValid)
  const handleSignUp = (values: any) => {
    Keyboard.dismiss()
    Alert.alert("Hello" + values)
  }
  return (
      <View>
       
       <Text>Home Screen</Text>
      </View>
  )
}

const HomeScreens = React.memo(() => (
  <BaseScreen
    showLoader={true}
    showError={true}
    render={injectedProps => <Home {...injectedProps} />}
  />
))

export default memo(HomeScreens)
