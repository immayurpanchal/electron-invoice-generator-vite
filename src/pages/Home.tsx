import { Menu } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'

const menuItems = [
  {
    label: 'File',
    key: 'file',
    children: [
      { label: 'Add Product', key: 'add_product' },
      {
        label: 'Add Customer',
        key: 'add_customer',
      },
      {
        label: 'Generate Sales Invoice',
        key: 'sales_invoice',
      },
    ],
  },
]

const Home = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate(`/${e.key}`)
  }

  return (
    <>
      <Menu onClick={handleClick} mode='horizontal' items={menuItems} />
      <Outlet />
    </>
  )
}

export default Home
