import { ipcRenderer } from 'electron'
import { useState } from 'react'

export const useIpcMutate = (channel: string) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState<Error | null>(null)
  const mutate = async (data?: any) => {
    try {
      const response = await ipcRenderer.invoke(channel, data)
      setData(response)
    } catch (err: any) {
      setError(err)
    }
  }

  return { mutate, data, isLoading: !!data, error }
}
