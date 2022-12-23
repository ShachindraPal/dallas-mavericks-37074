import {
  CommonActions,
  StackActions,
  useNavigation
} from "@react-navigation/native"

type AppNavigator = {
  navigateTo: (stateName: string, stateParam: object) => void,
  goBack: (appUiRootMode?: boolean) => void,
  replace: (stateName: string, stateParam?: object) => void,
  resetToScreen: (screenName: string, screenParams?: object) => void,
  pop: (numberOfScreens: number) => void,
  push: (stateName: string, stateParam?: object) => void
}

function useAppNavigator(): AppNavigator {
  const navigation = useNavigation()

  function navigateTo(stateName: string, stateParams: object) {
    navigation.navigate(stateName, stateParams)
  }

  function goBack(appUiRootMode?: boolean) {
    appUiRootMode
    // console.log("" + appUiRootMode)
    navigation.goBack()
  }

  function pop(numberOfScreens: number) {
    navigation.dispatch(StackActions.pop(numberOfScreens))
  }
  function push(stateName: string, stateParams?: object) {
    navigation.dispatch(StackActions.push(stateName, stateParams))
  }

  function replace(stateName: string, stateParams?: object) {
    navigation.dispatch(StackActions.replace(stateName, stateParams))
  }

  function resetToScreen(screenName: string, screenParams?: object) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screenName, params: screenParams }]
      })
    )
  }

  return {
    goBack,
    navigateTo,
    replace,
    resetToScreen,
    pop,
    push
  }
}

export default useAppNavigator
