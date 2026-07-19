//封装和token相关的方法 存 取 删 
const TOKEN_KEY = 'token'

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}