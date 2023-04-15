import { BillContext, BillContextType } from '@/App'
import { useIpcApi } from '@/hooks/useIpcApi'
import { AutoComplete, Button, Input, InputNumber, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { nanoid } from 'nanoid'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TableFooter from '../TableFooter/TableFooter'

interface Product {
  id: number
  product_name: string
  qty: number
  product_price: number
}

interface BillTable {
  key: number | string
  bill_price: number
}

export interface BillTableProduct extends BillTable, Product {}

interface AutoCompleteProductOption {
  value: string
  product: Product
}

export const getDummyRow = (): BillTable => {
  return { key: nanoid(), bill_price: 0 }
}

const SalesInvoice: React.FC = () => {
  const { data: apiData } = useIpcApi<Product[]>('getProducts')
  const navigate = useNavigate()
  const { setBillValue } = useContext<BillContextType>(BillContext)
  const [dataSource, setDataSource] = useState<
    (BillTable | (BillTable & Product))[]
  >([])

  useEffect(() => {
    setDataSource([getDummyRow(), getDummyRow()])
  }, [])

  const getAutoCompleteOptions = (): AutoCompleteProductOption[] => {
    if (!apiData) return []
    return apiData.map((product: Product) => ({
      value: product.product_name,
      product,
    }))
  }

  const handleAutoCompleteSelect = (
    _value: string,
    selectedProduct: Product,
    index: number
  ) => {
    const { id, product_name, product_price, qty } = selectedProduct

    const updatedDataSource = dataSource.map(
      (item, dsIndex): BillTableProduct | BillTable => {
        if (dsIndex === index) {
          return {
            ...item,
            id,
            product_name,
            qty: 1,
            bill_price: product_price,
            product_price,
          }
        }
        return item
      }
    )
    setDataSource(updatedDataSource)
  }

  // The type is for single column object type of dataSource[]
  const columns: ColumnsType<BillTable | (BillTable & Product)> = [
    {
      title: 'Sr.No.',
      render: (_: any, __: any, index: number) => index + 1,
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
            options={getAutoCompleteOptions()}
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
            disabled={!record.bill_price}
            defaultValue={1}
            min={1}
            onBlur={() => {
              if (index === dataSource.length - 2) {
                setDataSource([...dataSource, getDummyRow()])
              }
            }}
            onChange={(currentQty: number | null) => {
              if (!currentQty) return
              const updatedDataSource = dataSource.map((currItem, dsIndex) => {
                if (index === dsIndex) {
                  return {
                    ...currItem,
                    qty: currentQty,
                    bill_price: +(
                      currentQty * (currItem as BillTableProduct).product_price
                    ).toFixed(2),
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
      dataIndex: 'bill_price',
      render: (value: number = 0) => {
        return <Input type='number' value={value} disabled />
      },
    },
  ]

  const handleSaveAndPrint = () => {
    const formattedBillData = dataSource.map((item) => {
      const { bill_price, product_name, product_price, qty, id, key } =
        item as BillTableProduct
      return {
        product_name,
        product_price,
        qty,
        id,
        bill_price,
        key,
      }
    })
    setBillValue(formattedBillData)
    navigate('/sales-print')
  }

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      scroll={{ y: 600 }}
      footer={() => <TableFooter handleSaveAndPrint={handleSaveAndPrint} />}
    />
  )
}

export default SalesInvoice
