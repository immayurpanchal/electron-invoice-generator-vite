import { useIpcApi } from '@/hooks/useIpcApi'
import { AutoComplete, InputNumber, Input, Table } from 'antd'
import { ColumnType } from 'antd/es/table'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

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

interface BillTableProduct extends BillTable, Product {}

interface AutoCompleteProductOption {
  value: string
  product: Product
}

export const getDummyRow = (): BillTable => {
  return { key: nanoid(), bill_price: 0 }
}

const SalesTable: React.FC = () => {
  const { data: apiData } = useIpcApi<Product[]>('getProducts')
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
    value: string,
    selectedProduct: Product,
    index: number
  ) => {
    const { id, product_name, product_price, qty } = selectedProduct

    const updatedDataSource = dataSource.map(
      (item, dsIndex): BillTableProduct => {
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

  const cols: ColumnType<BillTable> = [
    {
      title: 'Sr.No.',
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      render: (value, record, index) => {
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
      render: (value, record, index) => {
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
                    bill_price: currentQty * currItem.product_price,
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

  return (
    <Table
      columns={cols}
      dataSource={dataSource}
      pagination={false}
      scroll={{ y: 300 }}
    />
  )
}

export default SalesTable
