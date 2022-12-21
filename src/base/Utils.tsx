import { useFocusEffect } from "@react-navigation/native"
import moment from "moment"
import React, { useCallback } from "react"
import { Alert, Dimensions, Linking, Platform, StatusBar, View } from "react-native"
import R from "res"
import GlobalStyles from "src/components/styles/style"

export const height = Dimensions.get("window").height
export const width = Dimensions.get("window").width

export const figmaHeight = 812
export const figmaWidth = 375

export const getScaledWidth = (x: number): number => {
  return Math.round((x / figmaWidth) * width)
}

export const getScaledHeight = (y: number): number => {
  return Math.round((y / figmaHeight) * height)
}


export const showErrorAlert = (message: string) => {
  Alert.alert("", message)
}

export const showTwoOptionAlert = (
  message: string,
  btn1Title: string,
  btn2Title: string,
  callback: any
) => {
  Alert.alert(
    "",
    message,
    [
      { text: btn1Title, onPress: () => callback() },
      {
        text: btn2Title,
        onPress: () => {
          btn1Title
        },
        style: "cancel"
      }
    ],
    {
      cancelable: true
    }
  )
}
const androidStatusBar = (style, backgroundColor) => {
  StatusBar.setBarStyle(style)
  StatusBar.setBackgroundColor(backgroundColor)
}

const iOSStatusBar = (style, backgroundColor) => {
  return (
    StatusBar.setBarStyle(style),
    (
      <View
        style={{
          width: "100%",
          height: getScaledWidth(R.dimensions.dimen_20),
          backgroundColor: backgroundColor //R.colors.primary.darkTangerine
        }}
      />
    )
  )
}



export const useStatusBar = (style, backgroundColor) => {
  useFocusEffect(
    useCallback(() => {
      {
        Platform.OS == "ios"
          ? iOSStatusBar(style, backgroundColor)
          : androidStatusBar(style, backgroundColor)
      }
    }, [backgroundColor, style])
  )
}
export function changeDateToLocaleFormat(
  requiredFormat: string,
  stringDate: string,
  initialDateFormat?: string
) {
  const convertedDate = initialDateFormat
    ? moment(stringDate).isValid()
      ? moment(stringDate, initialDateFormat).local().format(requiredFormat)
      : "N/A"
    : moment(stringDate).isValid()
    ? moment(stringDate, "YYYY-MM-DDTHH:mm:ss.SSSZ")
        .local()
        .format(requiredFormat)
    : "N/A"
  return convertedDate
}

export function OpenEmailApp(email_id: string) {
  Linking.openURL("mailto:" + email_id)
}
export function callApp(phoneNumber: string) {
  Linking.openURL(`tel:${phoneNumber}`)
}
export const ItemDivider = () => {
  return <View style={GlobalStyles.divider} />
}
export const ItemDividerLeftMargin = () => {
  return <View style={GlobalStyles.dividerLeftMargin} />
}
export const getFormattedDate = date => {
  return moment(date).format("MM-DD-YYYY")
}

export const convertDate = (date, from, to) => {
  return moment(date, from).format(to)
}
export const AllowAlphanumeric = text => {
  return text.replace(/[^a-zA-Z0-9]/g, "")
}

export const ConvertDateToDay = dateText => {
  return moment(dateText).format("d MMM")
}

export const getPlanImage = planName => {
  let imageName = "onePay"
  if (planName === "One Pay") imageName = "onePay"
  else if (planName === "One Pay Deferred") imageName = "onePayDeferred"
  else if (planName === "Two Pay") imageName = "twoPay"
  else if (planName === "Four Pay") imageName = "fourPay"

  return imageName
}

export const getPaymentMethodImage = paymentMethodName => {
  let imageName = "bank"
  if (paymentMethodName === "Bank") imageName = "bank"
  else if (paymentMethodName === "Card") imageName = "card"
  else if (paymentMethodName === "Add Method") imageName = "plus"
  else if (paymentMethodName === "Cash App") imageName = "cashApp"
  else imageName = "cash"

  return imageName
}

export const showFourDigits = digit => {
  const value = digit.substring(4, digit)
  return "XXXX" + value
}

export const ShowThreeDigitsNumber = digit => {
  const value = digit.substring(6, digit)
  return "XXXXXX" + value
}
