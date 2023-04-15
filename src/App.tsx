import SalesPrint from '@/components/SalesPrint/SalesPrint'
import SalesTable, {
  BillTableProduct,
} from '@/components/SalesTable/SalesTable'
import { StyleProvider } from '@ant-design/cssinjs'
import React, { useMemo, useState } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './App.scss'
import AddCustomer from './pages/AddCustomer'
import AddProduct from './pages/AddProduct'
import Home from './pages/Home'

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
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/sales_invoice',
        element: <SalesTable />,
      },
      {
        path: '/sales_print',
        element: <SalesPrint />,
      },
      {
        path: 'add_product',
        element: <AddProduct />,
      },
      {
        path: '/add_customer',
        element: <AddCustomer />,
      },
    ],
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
