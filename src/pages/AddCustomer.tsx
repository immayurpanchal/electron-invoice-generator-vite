import { Button, Form, Input, notification } from 'antd'
import { useEffect } from 'react'
import { useIpcMutate } from '@/hooks/useIpcMutate'

const AddCustomer = () => {
  const [form] = Form.useForm()
  const { mutate: addCustomer, data, error } = useIpcMutate('addCustomer')

  useEffect(() => {
    if (data) {
      notification.success({
        message: 'Customer Added successfully',
        placement: 'top',
      })
    }
  }, [data])

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Failed to add the customer',
        placement: 'top',
        description: error.message,
      })
    }
  }, [error])

  const onFinish = async (values: any) => {
    await addCustomer(values)
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
          label='Customer Name'
          name='customerName'
          rules={[
            {
              required: true,
              message: 'Please input the customer name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='City'
          name='city'
          rules={[
            {
              required: true,
              message: 'Please input the city!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Mobile Number'
          name='mobileNumber'
          rules={[
            {
              required: true,
              message: 'Please input the mobile number!',
            },
          ]}
        >
          <Input />
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

export default AddCustomer
