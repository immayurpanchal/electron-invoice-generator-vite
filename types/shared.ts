import { Dayjs } from 'dayjs'

export interface Product {
  id: number
  product_name: string
  qty: number
}

export interface Customer {
  id: number
  name: string
  city: string
  mobileNumber: string
}
export interface EmptyRow {
  key: string
}

export interface BillProduct extends Product {
  product_price: number
  bill_price: number
}

export interface BillTableProduct extends EmptyRow, BillProduct {}

export interface CustomerBill {
  customerId: number
  billProducts: BillProduct[]
  date: Dayjs
}

export interface BillContextType {
  currentBill: CustomerBill
  setCurrentBill: React.Dispatch<React.SetStateAction<CustomerBill>>
}
