import { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'

interface Response<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
}

export const useIpcApi = <T,>(channel: string, args?: any): Response<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    ipcRenderer.invoke(channel, args).then(
      (response: T) => {
        setData(response)
        setIsLoading(false)
      },
      (error: Error) => {
        setError(error)
        setIsLoading(false)
      }
    )
  }, [channel, args])

  return { data, error, isLoading }
}
