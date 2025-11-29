const getLocalStorage = (key: string | null | undefined) => {
  if(!key) return

  return window.localStorage.getItem(key)
}

const setLocalStorage = (key: string, value: string | null | undefined) => {
  if (!value) return

  return window.localStorage.setItem(key, value)
}

const removeLocalStorage = (key: string) => {

  return window.localStorage.removeItem(key)
}

export { getLocalStorage, setLocalStorage, removeLocalStorage }
