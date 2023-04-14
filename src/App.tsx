import React, { useMemo, useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import SalesPrint from '@/components/SalesPrint/SalesPrint'
import SalesTable, {
  BillTableProduct,
} from './components/SalesTable/SalesTable'

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
      <RouterProvider router={router} />
    </BillContext.Provider>
  )
}

export default App
