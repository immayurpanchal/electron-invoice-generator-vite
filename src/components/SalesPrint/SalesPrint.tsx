import { Col, Row, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SalesPrint.scss'

const mockData = [
  {
    product_name:
      'MSV CHAIN 001 80 POINT BLOUSE PIECE IN 2 CUTS AND  PIECE AND LONGER NAME WITH BEAUTIFUL CUTS',
    product_price: 49.99,
    qty: 2,
    id: 1,
    bill_price: 148599.98,
  },
  {
    product_name: 'LADY HEROINE CUT SIZE BLOUSE PIECE FULL NECK HALF NECK',
    product_price: 29.99,
    qty: 3,
    id: 2,
    bill_price: 8549.97,
  },
  {
    product_name: 'Shoes',
    product_price: 89.99,
    qty: 1,
    id: 3,
    bill_price: 859.99,
  },
  {
    product_name: 'Jeans',
    product_price: 59.99,
    qty: 2,
    id: 4,
    bill_price: 119.98,
  },
  {
    product_name: 'T-shirt',
    product_price: 19.99,
    qty: 4,
    id: 5,
    bill_price: 79.96,
  },
  // Add remaining 15 items here
  {
    product_name: 'Item6',
    product_price: 39.99,
    qty: 3,
    id: 6,
    bill_price: 119.97,
  },
  {
    product_name: 'Item7',
    product_price: 69.99,
    qty: 1,
    id: 7,
    bill_price: 69.99,
  },
  {
    product_name: 'Item8',
    product_price: 14.99,
    qty: 5,
    id: 8,
    bill_price: 74.95,
  },
  {
    product_name: 'Item9',
    product_price: 99.99,
    qty: 2,
    id: 9,
    bill_price: 199.98,
  },
  {
    product_name: 'Item10',
    product_price: 49.99,
    qty: 3,
    id: 10,
    bill_price: 149.97,
  },
  {
    product_name: 'Item11',
    product_price: 79.99,
    qty: 1,
    id: 11,
    bill_price: 79.99,
  },
  {
    product_name: 'Item12',
    product_price: 24.99,
    qty: 4,
    id: 12,
    bill_price: 99.96,
  },
  {
    product_name: 'Item13',
    product_price: 54.99,
    qty: 2,
    id: 13,
    bill_price: 109.98,
  },
  {
    product_name: 'Item14',
    product_price: 29.99,
    qty: 3,
    id: 14,
    bill_price: 89.97,
  },
  {
    product_name: 'Item15',
    product_price: 39.99,
    qty: 1,
    id: 15,
    bill_price: 39.99,
  },
  {
    product_name: 'Item16',
    product_price: 19.99,
    qty: 5,
    id: 16,
    bill_price: 99.95,
  },
  {
    product_name: 'Item17',
    product_price: 64.99,
    qty: 2,
    id: 17,
    bill_price: 129.98,
  },
]
const columns: ColumnsType<any> = [
  {
    title: 'Sr.No.',
    render: (_value, _record, index) => index + 1,
    align: 'right',
    width: 20,
  },
  {
    title: 'Description',
    dataIndex: 'product_name',
    align: 'left',
  },
  {
    title: 'Qty.',
    dataIndex: 'qty',
    align: 'right',
    width: 50,
  },
  {
    title: 'Amount',
    dataIndex: 'bill_price',
    align: 'right',
    width: 100,
  },
]

const SalesPrint = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handlePrint = (event: KeyboardEvent) => {
      // Check if the "p" key is pressed
      if (
        (event.key === 'p' || event.key === 'P') &&
        (event.ctrlKey || event.metaKey)
      ) {
        // Check if the Ctrl key (Windows) or Command key (macOS) is also pressed
        // Add your code here to perform actions when "Ctrl + P" (Windows) or "Command + P" (macOS) is pressed
        console.log('Print command detected!')
        window.print()
        // ipcRenderer.send('print-preview')
        // Prevent the default behavior of the "Ctrl + P" or "Command + P" key combination, which is to open the print dialog
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handlePrint)

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('keydown', handlePrint)
    }
  }, [])

  return (
    <div className='a4-box p-3'>
      <Col className='border-black border rounded-xl p-5 flex flex-col gap-y-4'>
        <Row justify='space-between'>
          <span>Debit Memo</span>
          <span>Subject to Idar Jurisdiction</span>
          <span>BILL OF SUPPLY</span>
        </Row>
        <Row justify='center'>
          <span className='text-2xl font-semibold uppercase'>
            Utsav Collection
          </span>
        </Row>
        <Row justify='center'>
          <span>
            Near Bus Stand, Beside Ramesh Electronics, Idar. Mo. 9409512345
          </span>
        </Row>
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
          <Col span={24}>
            <Table
              dataSource={mockData}
              columns={columns}
              pagination={false}
              size='small'
              footer={() => (
                <Col span={24} offset={8} className='text-right'>
                  <Row justify='end'>
                    <Col span={12} className='font-bold'>
                      CGST (9%)
                    </Col>
                    <Col span={4}>1520.15</Col>
                  </Row>
                  <Row justify='end'>
                    <Col span={12} className='font-bold'>
                      SGST (9%)
                    </Col>
                    <Col span={4}>24520.01</Col>
                  </Row>
                  <Row justify='end'>
                    <Col span={12} className='font-bold'>
                      Total Amount
                    </Col>
                    <Col span={4}>578452.02</Col>
                  </Row>
                </Col>
              )}
            />
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default SalesPrint
