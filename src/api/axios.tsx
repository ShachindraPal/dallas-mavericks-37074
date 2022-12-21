import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"
import { store } from "src/redux/store"
import { TOKEN } from "../storage/AsyncStorageConstant"
import { BaseURL } from "./ApiConstants"
import { error } from "./useHttp"

export async function postRequest(requestUrl: string, body: any) {
  const url = BaseURL + requestUrl
  const successStatus = [200, 201, 202]
  const token = await store.getState().auth?.responseToken
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
  if (token) {
    header.Authorization = `Bearer ${token}`
  }

  return axios({
    method: "post",
    url: url,
    responseType: "text",
    data: body,
    headers: header,
    timeout: 30000,
    validateStatus: function (status: any) {
      return status // default
    }
  })
    .then(function (response: any) {
      console.log(url)

      console.log(JSON.stringify(response.data))
      if (
        successStatus.includes(
          response?.data?.httpStatusCode ?? response?.data?.code
        )
      ) {
        return response?.data?.data ?? response?.data
      } else {
        throw error(response)
      }
    })
    .catch((err: any) => {
      throw err
    })
}

export async function putRequest(requestUrl: string, body: any) {
  const url = BaseURL + requestUrl
  const successStatus = [200, 201, 202, 204]
  const token = await store.getState().auth?.responseToken
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
  if (token) {
    header.Authorization = `Bearer ${token}`
  }

  return axios({
    method: "put",
    url: url,
    responseType: "text",
    data: body,
    headers: header,
    timeout: 30000,
    validateStatus: function (status: any) {
      return status // default
    }
  })
    .then(function (response: any) {
      // console.log(url)
      console.log(JSON.stringify(response.data))
      if (
        successStatus.includes(
          response?.data?.httpStatusCode ??
            response?.data?.code ??
            response?.status
        )
      ) {
        return response?.data?.data ?? response?.data
      } else {
        throw error(response)
      }
    })
    .catch((err: any) => {
      throw err
    })
}

//Used this method to upload the profile image on server in multiparts
export async function multiPartsPostRequest(requestUrl: string, body: any) {
  const url = BaseURL + requestUrl
  const successStatus = [200, 201, 202, 204]
  const header = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    mineType: "multipart/form-data"
  }
  await AsyncStorage.getItem(TOKEN)
    .then(data => {
      if (data) {
        Object.assign(header, { Authorization: `Bearer ${JSON.parse(data)}` })
      }
    })
    .catch(err => {
      err
    })

  return axios({
    method: "post",
    url: url,
    responseType: "text",
    data: body,
    headers: header,
    timeout: 15000,
    validateStatus: function (status: any) {
      return status // default
    },
    transformRequest: () => {
      // !!! override data to return formData
      // since axios converts that to string
      return body
    }
  })
    .then(function (response: any) {
      if (
        successStatus.includes(
          response?.data?.httpStatusCode ?? response?.data?.code
        )
      ) {
        return response?.data
      } else {
        throw error(response)
      }
    })
    .catch((err: any) => {
      throw err
    })
}

export async function getRequest(requestUrl: string, body?: any) {
  const url = BaseURL + requestUrl
  const token = await store.getState().auth?.responseToken
  const successStatus = [200, 201, 202, 204]
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
  if (token) {
    header.Authorization = `Bearer ${token}`
  }

  return axios({
    method: "get",
    url: url,
    responseType: "text",
    headers: header,
    timeout: 15000,
    params: body,
    validateStatus: function (status: any) {
      return status // default
    }
  })
    .then(function (response: any) {
      console.log(url)

      console.log(JSON.stringify(response))
      if (
        successStatus.includes(
          response?.data?.httpStatusCode ?? response?.data?.code
        )
      ) {
        return response?.data
      } else {
        throw error(response)
      }
    })
    .catch((err: any) => {
      throw err
    })
}

export async function delRequest(requestUrl: string, body?: any) {
  body
  const url = BaseURL + requestUrl
  console.log(url)
  const token = await store.getState().auth?.responseToken
  const successStatus = [200, 201, 202, 204]

  const header = {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
  if (token) {
    header.Authorization = `Bearer ${token}`
  }

  return axios({
    method: "DELETE",
    url: url,
    responseType: "text",
    headers: header,
    timeout: 15000,
    validateStatus: function (status: any) {
      return status // default
    }
  })
    .then(function (response: any) {
      console.log(JSON.stringify(response))
      if (
        successStatus.includes(
          response?.data?.httpStatusCode ??
            response?.data?.code ??
            response?.status
        )
      ) {
        return response?.data?.data ?? response?.data
      } else {
        throw error(response)
      }
    })
    .catch((err: any) => {
      throw err
    })
}
