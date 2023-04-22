import { BillContext } from '@/App'
import { useIpcApi } from '@/hooks/useIpcApi'
import { useIpcMutate } from '@/hooks/useIpcMutate'
import {
  AutoComplete,
  Col,
  DatePicker,
  DatePickerProps,
  Input,
  InputNumber,
  Row,
  Table,
} from 'antd'
import { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type {
  BillContextType,
  BillProduct,
  BillTableProduct,
  Customer,
  EmptyRow,
  Product,
} from '../../../types/shared'
import TableFooter from '../TableFooter/TableFooter'
interface AutoCompleteProductOption {
  value: string
  product: Product
}

export const getDummyRow = (): EmptyRow => {
  return { key: nanoid() }
}

export const DATE_FORMAT = 'DD/MM/YYYY'

const SalesInvoice: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const { data: productData } = useIpcApi<Product[]>('getProducts')
  const { data: customerData } = useIpcApi<Customer[]>('getCustomers')
  const { data: billNo } = useIpcApi<number>('getBillNo')
  const { mutate: createBill } = useIpcMutate('createBill')

  const navigate = useNavigate()
  const billContext = useContext<BillContextType | null>(BillContext)
  const { setCurrentBill } = billContext as BillContextType
  const [dataSource, setDataSource] = useState<(EmptyRow | BillTableProduct)[]>(
    []
  )

  useEffect(() => {
    setDataSource([getDummyRow(), getDummyRow()])
  }, [])

  const onDateChange: DatePickerProps['onChange'] = (value) => {
    setSelectedDate(dayjs(value))
  }
  const getProductAutoCompleteOptions = (): AutoCompleteProductOption[] => {
    if (!productData) return []
    return productData.map((product: Product) => ({
      value: product.product_name,
      product,
    }))
  }

  const getCustomerAutoCompleteOptions = () => {
    if (!customerData) return []
    return customerData.map((customer: Customer) => ({
      value: customer.name,
      customer,
    }))
  }

  const handleAutoCompleteSelect = (
    _value: string,
    selectedProduct: Product,
    index: number
  ) => {
    const { id, product_name } = selectedProduct

    const updatedDataSource = dataSource.map(
      (item, dsIndex): EmptyRow | BillTableProduct => {
        if (dsIndex === index) {
          return {
            ...item,
            id,
            product_name,
            qty: 1,
          }
        }
        return item
      }
    )
    setDataSource(updatedDataSource)
  }

  // The type is for single column object type of dataSource[]
  const columns: ColumnsType<EmptyRow | BillTableProduct> = [
    {
      title: 'Sr.No.',
      render: (_value, _record, index: number) => index + 1,
    },
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      // prefix argument with _ if that is not being used in the function
      render: (_value, _record, index) => {
        return (
          <AutoComplete
            defaultActiveFirstOption
            style={{ width: '100%' }}
            options={getProductAutoCompleteOptions()}
            filterOption={(inputValue, option) => {
              return option?.value
                ?.toLowerCase()
                .includes(inputValue.toLowerCase()) as boolean
            }}
            onSelect={(value, option) => {
              const { product } = option
              handleAutoCompleteSelect(value, product, index)
            }}
            placeholder='Search Product'
          />
        )
      },
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      render: (_value, record, index) => {
        return (
          <InputNumber
            defaultValue={1}
            min={1}
            onChange={(currentQty: number | null) => {
              if (!currentQty) return
              const updatedDataSource = dataSource.map((currItem, dsIndex) => {
                if (index === dsIndex) {
                  const { product_price = 0 } = currItem as BillProduct
                  return {
                    ...currItem,
                    qty: currentQty,
                    bill_price: +(+currentQty * +product_price).toFixed(2),
                  }
                }
                return currItem
              })

              setDataSource(updatedDataSource)
            }}
          />
        )
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (_value, _record, index) => {
        return (
          <InputNumber
            defaultValue={0}
            min={0}
            onBlur={() => {
              if (index === dataSource.length - 2) {
                setDataSource([...dataSource, getDummyRow()])
              }
            }}
            onChange={(currentPrice: number | null) => {
              if (!currentPrice) return
              const updatedDataSource = dataSource.map((currItem, dsIndex) => {
                if (index === dsIndex) {
                  const { qty = 1 } = currItem as BillProduct
                  return {
                    ...currItem,
                    product_price: +currentPrice,
                    bill_price: +(+qty * +currentPrice).toFixed(2),
                  }
                }
                return currItem
              })

              setDataSource(updatedDataSource)
            }}
          />
        )
      },
    },
    {
      title: 'Net Amount',
      dataIndex: 'bill_price',
      render: (value: number = 0) => {
        return <Input type='number' value={value} disabled />
      },
    },
  ]

  const handleSaveAndPrint = () => {
    const isBillTableProduct = (
      item: EmptyRow | BillTableProduct
    ): item is BillTableProduct => {
      return (item as BillTableProduct).product_name !== undefined
    }

    const filteredDataSource = dataSource.filter(
      isBillTableProduct
    ) as BillProduct[]

    setCurrentBill({
      billProducts: filteredDataSource,
      customerId: selectedCustomer?.id || 0,
      date: selectedDate,
    })

    createBill({
      customerId: selectedCustomer?.id || 0,
      billProducts: filteredDataSource,
      date: selectedDate.format(),
    })
    navigate('/sales_print')
  }

  return (
    <Row justify='center'>
      <Col span={20}>
        <Row>
          <Col span={2} className='font-bold'>
            <span>M/s</span>
          </Col>
          <Col span={16}>
            <AutoComplete
              defaultActiveFirstOption
              style={{ width: '100%' }}
              onChange={() => setSelectedCustomer(null)}
              options={getCustomerAutoCompleteOptions()}
              filterOption={(inputValue, option) => {
                return option?.value
                  ?.toLowerCase()
                  .includes(inputValue.toLowerCase()) as boolean
              }}
              onSelect={(_value, option) => {
                const { customer } = option
                setSelectedCustomer(customer)
              }}
              placeholder='Search Customer'
            />
          </Col>
          <Col span={2} className='font-bold'>
            <span>Bill No</span>
          </Col>
          <Col span={4}>
            <span>{billNo}</span>
          </Col>
        </Row>
        <Row>
          <Col span={2} className='font-bold'>
            <span>City</span>
          </Col>
          <Col span={16}>
            <span>{selectedCustomer?.city}</span>
          </Col>
          <Col span={2} className='font-bold'>
            <span>Date</span>
          </Col>
          <Col span={4}>
            <DatePicker
              format={DATE_FORMAT}
              defaultValue={dayjs()}
              value={selectedDate}
              onChange={onDateChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              scroll={{ y: 600 }}
              footer={() => (
                <TableFooter handleSaveAndPrint={handleSaveAndPrint} />
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SalesInvoice
