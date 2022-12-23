// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react"
import { ActivityIndicator, Modal, View } from "react-native"
import R from "res"
import GlobalStyles from "src/components/styles/style"

const Loader = props => {
  // const { loading, ...attributes } = props;
  const { loading } = props

  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={loading}
      onRequestClose={() => {
        ;() => function () {}
      }}
    >
      <View style={GlobalStyles.modalBackground}>
        <View style={GlobalStyles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color={R.colors.primary.darkTangerine}
            size="large"
            style={GlobalStyles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  )
}

export default Loader
