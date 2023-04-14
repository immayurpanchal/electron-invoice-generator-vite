import SalesPrint from '@/components/SalesPrint/SalesPrint'
import { StyleProvider } from '@ant-design/cssinjs'
import React, { useMemo, useState } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './App.scss'
import SalesTable, {
  BillTableProduct,
} from '@/components/SalesTable/SalesTable'

export const BillContext = React.createContext<BillContextType>({
  billValue: [],
  setBillValue: () => {},
})
export interface BillContextType {
  billValue: BillTableProduct[]
  setBillValue: React.Dispatch<React.SetStateAction<BillTableProduct[]>>
}

const router = createHashRouter([
  {
    path: '/sales-print',
    element: <SalesPrint />,
  },
  {
    path: '/',
    element: <SalesTable />,
  },
])

const App = () => {
  const [billValue, setBillValue] = useState<BillTableProduct[]>([])
  const memoizedValue = useMemo(
    () => ({ billValue, setBillValue }),
    [billValue, setBillValue]
  )

  return (
    <BillContext.Provider value={memoizedValue}>
      <StyleProvider hashPriority='high'>
        <RouterProvider router={router} />
      </StyleProvider>
    </BillContext.Provider>
  )
}

export default App
