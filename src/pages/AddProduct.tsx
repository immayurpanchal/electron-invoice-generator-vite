import { useIpcMutate } from '@/hooks/useIpcMutate'
import { Button, Form, Input, InputNumber, notification } from 'antd'
import { useEffect } from 'react'

const AddProduct = () => {
  const [form] = Form.useForm()
  const { mutate: addProduct, data, error } = useIpcMutate('addProduct')

  useEffect(() => {
    if (data) {
      notification.success({
        message: 'Product Added successfully',
        placement: 'top',
      })
    }
  }, [data])

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Failed to add the product',
        placement: 'top',
        description: error.message,
      })
    }
  }, [error])

  const onFinish = async (values: any) => {
    await addProduct(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Product Name'
          name='productName'
          rules={[
            { required: true, message: 'Please input the product name!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Product Quantity'
          name='productQty'
          rules={[
            { required: true, message: 'Please input the product quantity!' },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProduct
