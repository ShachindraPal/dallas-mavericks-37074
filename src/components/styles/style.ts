import { Dimensions, Platform } from "react-native"
import R from "res"
import DeviceInfo from "react-native-device-info"
import { getScaledHeight } from "src/base/Utils"
const deviceNotch = DeviceInfo.hasNotch()

const GlobalStyles = {
  container: {
    flex: 1
  },
  bodyTextBold: {
    color: R.colors.textAndBackground.whiteText,
    fontFamily: R.fonts.bold.fontFamily,
    fontSize: getScaledHeight(R.dimensions.dimen_16),
    lineHeight: getScaledHeight(R.dimensions.dimen_20)
  },
  
}

export default GlobalStyles
