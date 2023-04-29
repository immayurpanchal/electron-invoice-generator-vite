import SalesInvoice from '@/components/SalesInvoice/SalesInvoice'
import SalesPrint from '@/components/SalesPrint/SalesPrint'
import AddCustomer from '@/pages/AddCustomer'
import AddProduct from '@/pages/AddProduct'
import Home from '@/pages/Home'
import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './App.scss'
import { BillContextType, CustomerBill } from './types/shared'

const initialValue: CustomerBill = {
  billProducts: [],
  customerId: 0,
  date: dayjs(),
}

export const BillContext = React.createContext<BillContextType | null>(null)

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/sales_invoice',
        element: <SalesInvoice />,
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
  const [currentBill, setCurrentBill] = useState<CustomerBill>(initialValue)

  const memoizedValue = useMemo(
    () => ({ currentBill, setCurrentBill }),
    [currentBill, setCurrentBill]
  )

  return (
    <BillContext.Provider value={memoizedValue}>
      <RouterProvider router={router} />
    </BillContext.Provider>
  )
}

export default App
