import AsyncStorage from "@react-native-community/async-storage"
//import { UserInfo } from "src/redux/reducer/auth/state"
import { TOKEN, USER_DATA } from "./AsyncStorageConstant"

class AsyncStorageFunc {
  storeData = async (key: string, value: any) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (e) {
      return false
    }
  }

  deleteData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (exception) {
      return false
    }
  }

  storeUserData = (userData: any) => {
    this.storeData(TOKEN, userData.access_token)
    this.storeData(USER_DATA, userData)
  }
}
export default new AsyncStorageFunc()
