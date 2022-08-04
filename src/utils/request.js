import axios from 'axios'

const axiosAPI = axios.create({
  baseURL: "https://xxxx.typicode.com",
  withCredentials: true,
  timeout: 10000
})

const apiRequest = (method, url, request) => {
  const headers = {
    authorization: ""
  }
  return axiosAPI({
    method,
    url,
    data: request,
    headers
  }).then(res => {
    return Promise.resolve(res.data)
  }).catch(err => {
    return Promise.reject(err)
  })
}

// function to execute the http get request
const get = (url, request) => apiRequest("get", url, request);

// function to execute the http delete request
const deleteRequest = (url, request) => apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url, request) => apiRequest("patch", url, request);


export { get, deleteRequest, post, put, patch };