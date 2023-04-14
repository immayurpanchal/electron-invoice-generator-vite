import { Button } from 'antd'

interface TableFooterProps {
  handleSaveAndPrint: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLButtonElement>
}

const TableFooter = (props: TableFooterProps) => {
  const { handleSaveAndPrint } = props
  return (
    <Button type='primary' onClick={handleSaveAndPrint}>
      Save & Print
    </Button>
  )
}

export default TableFooter
