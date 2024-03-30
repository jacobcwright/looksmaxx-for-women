import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useAsyncStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((value) => {
        if (value !== null) {
          setStoredValue(JSON.parse(value) as T)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [key])

  const setValue = async (value: T) => {
    try {
      const valueToStore = JSON.stringify(value)
      await AsyncStorage.setItem(key, valueToStore)
      setStoredValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as [T, (value: T) => void]
}
