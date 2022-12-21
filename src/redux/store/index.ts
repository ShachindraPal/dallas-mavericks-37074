import AsyncStorage from "@react-native-community/async-storage"
import { applyMiddleware, compose, createStore } from "redux"
import { createLogger } from "redux-logger"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"
import { rootReducer } from "../reducer"

const logger = createLogger({
  collapsed: true
})

const persistConfig = {
  key: "root:emigre",
  storage: AsyncStorage,
  whitelist: ["auth", "resident"]
}

const emptyMiddleWare = () => next => action => next(action)

let loggerMiddleWare = emptyMiddleWare

if (__DEV__) {
  loggerMiddleWare = logger
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, loggerMiddleWare))
)
const persistor = persistStore(store)

export { store, persistor }
