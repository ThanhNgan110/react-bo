const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key)
}

const setLocalStorage = (key: string, value: string) => {
  return window.localStorage.setItem(key, value)
}

export { getLocalStorage, setLocalStorage }
