import { BillContext, BillContextType } from '@/App'
import { useIpcApi } from '@/hooks/useIpcApi'
import { AutoComplete, Col, Input, InputNumber, Row, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { nanoid } from 'nanoid'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TableFooter from '../TableFooter/TableFooter'

interface Product {
  id: number
  product_name: string
  qty: number
}

interface EmptyRow {
  key: string
}

interface BillProduct extends Product {
  product_price: number
  bill_price: number
}

export interface BillTableProduct extends EmptyRow, BillProduct {}

interface AutoCompleteProductOption {
  value: string
  product: Product
}

export const getDummyRow = (): EmptyRow => {
  return { key: nanoid() }
}

const SalesInvoice: React.FC = () => {
  const { data: apiData } = useIpcApi<Product[]>('getProducts')
  const navigate = useNavigate()
  const { setBillValue } = useContext<BillContextType>(BillContext)
  const [dataSource, setDataSource] = useState<(EmptyRow | BillTableProduct)[]>(
    []
  )

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

    const filteredDataSource = dataSource.filter(isBillTableProduct)
    setBillValue(filteredDataSource as BillTableProduct[])
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
            <span>Hansaben Soni</span>
          </Col>
          <Col span={2} className='font-bold'>
            <span>Bill No</span>
          </Col>
          <Col span={4}>
            <span>10456755666</span>
          </Col>
        </Row>
        <Row>
          <Col span={2} className='font-bold'>
            <span>City</span>
          </Col>
          <Col span={16}>
            <span>IDAR</span>
          </Col>
          <Col span={2} className='font-bold'>
            <span>Date</span>
          </Col>
          <Col span={4}>
            <span>10/07/2019</span>
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
