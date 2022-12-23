import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useAppNavigator from "./useAppNavigator"
import { RootState } from "src/redux/reducer/index"

export const useUserStateNavigator = () => {
  const { navigateTo } = useAppNavigator()

  const [userProfileCompleted, setUserProfileCompleted] = useState(false)
  const loginReducer = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (loginReducer?.responseToken) {

      setUserProfileCompleted(true)

    } else {
      setUserProfileCompleted(false)
    }
  }, [
    loginReducer?.responseToken,
    navigateTo
  ])

  return userProfileCompleted
}
