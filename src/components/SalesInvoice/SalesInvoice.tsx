import { useIpcApi } from '@/hooks/useIpcApi'
import {
  AutoComplete,
  Button,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Table,
  Typography,
} from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useState } from 'react'

const SalesInvoice = () => {
  const [product, setProduct] = useState([])
  const { data: products, isLoading, error } = useIpcApi('getProducts')

  const columns: ColumnsType = [
    { dataIndex: 'id', title: 'ID', key: 'id' },
    {
      dataIndex: 'product_name',
      title: 'Product Name',
      key: 'product_name',
    },
  ]

  const options = products?.map((currentProduct) => {
    const { product_name } = currentProduct
    return { value: product_name, metaData: currentProduct }
  })

  const onSelect = (value: string, selectedProduct) => {
    setProduct([...product, selectedProduct.metaData])
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text>Bill No</Typography.Text>
          <Input />
        </Col>
        <Col span={8}>
          <Typography.Text>Date</Typography.Text>
          <DatePicker />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text>Name</Typography.Text>
          <Input />
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <AutoComplete
            options={options}
            style={{ width: '100%' }}
            onSelect={onSelect}
          />
        </Col>
        <Col span={4}>
          <Typography.Text>Qty</Typography.Text>
          <InputNumber />
        </Col>
        <Col>
          <Typography.Text>Price</Typography.Text>
          <Input type='number' />
        </Col>
        <Col>
          <Button type='primary'>Add</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table dataSource={product} columns={columns} pagination={false} />
        </Col>
      </Row>
    </div>
  )
}

export default SalesInvoice
