import { BillContext } from '@/App'
import { Col, Row, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useContext, useEffect } from 'react'
import { BillTableProduct } from '../SalesInvoice/SalesInvoice'
import './SalesPrint.scss'

const columns: ColumnsType<BillTableProduct> = [
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
    title: 'Price',
    dataIndex: 'product_price',
    align: 'right',
  },
  {
    title: 'Net Amount',
    dataIndex: 'bill_price',
    align: 'right',
    width: 100,
  },
]

const SalesPrint = () => {
  const { billValue } = useContext(BillContext)

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
    <div className='p-3 a4-box'>
      <Col className='flex flex-col p-5 border border-black rounded-xl gap-y-4'>
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
              dataSource={billValue}
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
