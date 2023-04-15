import { useIpcMutate } from '@/hooks/useIpcMutate'
import { Menu, notification } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import type { MenuClickEventHandler } from 'node_modules/rc-menu/lib/interface'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const menuItems: ItemType[] = [
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
  {
    label: 'Tools',
    key: 'tools',
    children: [
      {
        label: 'Delete All Products',
        key: 'delete_all_products',
      },
      {
        label: 'Delete All Customers',
        key: 'delete_all_customers',
      },
      {
        label: 'Reset Entire App',
        key: 'delete_all_tables',
      },
    ],
  },
]

const Home = () => {
  const navigate = useNavigate()
  const {
    mutate: deleteAllProducts,
    data,
    error,
  } = useIpcMutate('deleteAllProducts')

  useEffect(() => {
    if (data) {
      notification.success({
        message: 'Deleted All Products successfully',
        placement: 'top',
      })
    }
  }, [data])

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Failed to Deleted All Products!',
        description: error.message,
        placement: 'top',
      })
    }
  }, [error])

  const handleToolsMenu = async (key: string) => {
    if (key === 'delete_all_products') {
      await deleteAllProducts()
    }
  }

  const handleClick: MenuClickEventHandler = (e) => {
    if (e.keyPath.includes('tools')) {
      return handleToolsMenu(e.key)
    } else if (e.keyPath.includes('file')) {
      navigate(`/${e.key}`)
    }
  }

  return (
    <>
      <Menu onClick={handleClick} mode='horizontal' items={menuItems} />
      <Outlet />
    </>
  )
}

export default Home
