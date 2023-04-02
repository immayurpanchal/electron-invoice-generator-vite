import { useIpcApi } from '@/hooks/useIpcApi'
import { AutoComplete, Button, Col, Input, Row, Table } from 'antd'
import { useEffect, useRef, useState } from 'react'

interface Product {
  id: number
  product_name: string
  qty: number
  product_price: number
}

interface BillProduct {
  key: number
  srNo: number
  name: string
  qty: number
  price: number
}

const DynamicTable: React.FC = () => {
  const { data: apiData } = useIpcApi<Product[]>('getProducts')
  const autoCompleteRef = useRef(null)
  const [qty, setQty] = useState<number>(1)
  const [price, setPrice] = useState<number>(0.0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [billProducts, setBillProducts] = useState<BillProduct[]>([])

  const columns = [
    { title: 'Sr.No.', dataIndex: 'srNo', key: 'srNo' },
    { title: 'Product Name', dataIndex: 'name', key: 'name' },
    { title: 'Qty', dataIndex: 'qty', key: 'qty' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
  ]

  const getAutoCompleteOptions = () => {
    if (!apiData) return []
    return apiData.map((product: Product) => ({
      value: product.product_name,
      product,
    }))
  }

  const onAutoCompleteSelect = (
    _: string,
    option: { value: string; product: Product }
  ) => {
    const { product } = option
    setSelectedProduct(product)
    setQty(1)
    setPrice(product.product_price)
  }

  const onAutoCompleteSearch = () => {
    setSelectedProduct(null)
  }

  const onQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQty(+e.target.value)
  }

  const onAdd = () => {
    if (!selectedProduct) return

    const acRef = autoCompleteRef.current as unknown as HTMLInputElement
    acRef!.focus()

    let newBillProducts: BillProduct[] = []
    const index = billProducts.findIndex(
      (dataSourceProduct) => dataSourceProduct.key === selectedProduct?.id
    )

    if (index !== -1) {
      // duplicate found
      newBillProducts = [...billProducts]
      const existingProduct = newBillProducts[index]
      existingProduct.qty = +existingProduct.qty + qty
      existingProduct.price = +(
        existingProduct.qty * selectedProduct.product_price
      ).toFixed(2)
      setBillProducts(newBillProducts)
    } else {
      newBillProducts = [
        ...billProducts,
        {
          key: selectedProduct.id,
          srNo: billProducts.length + 1,
          name: selectedProduct.product_name,
          qty,
          price: +price.toFixed(2),
        },
      ]
      setBillProducts(newBillProducts)
    }
  }

  useEffect(() => {
    if (!selectedProduct) return

    const newPrice = selectedProduct.product_price * qty || 0
    setPrice(+newPrice.toFixed(2))
  }, [qty])

  useEffect(() => {
    setSelectedProduct(null)
    setQty(1)
    setPrice(0.0)
  }, [billProducts])

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <AutoComplete
            ref={autoCompleteRef}
            defaultActiveFirstOption
            style={{ width: '100%' }}
            options={getAutoCompleteOptions()}
            filterOption={(inputValue, option) => {
              return option?.value
                ?.toLowerCase()
                .includes(inputValue.toLowerCase()) as boolean
            }}
            onSelect={onAutoCompleteSelect}
            onSearch={onAutoCompleteSearch}
            placeholder='Search Product'
          />
        </Col>
        <Col span={4}>
          <Input
            value={qty}
            defaultValue={1}
            min={1}
            onChange={onQtyChange}
            type='number'
            placeholder='Qty'
            disabled={!selectedProduct}
          />
        </Col>
        <Col span={4}>
          <Input value={price} type='number' placeholder='Price' disabled />
        </Col>
        <Col span={4}>
          <Button type='primary' disabled={!selectedProduct} onClick={onAdd}>
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            dataSource={billProducts}
            columns={columns}
            scroll={{ y: 300 }}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  )
}

export default DynamicTable
