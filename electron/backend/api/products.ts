import { ipcMain } from 'electron'
import { prisma } from './shared/prismaClient'

ipcMain.handle('getProducts', async () => {
  try {
    const products = await prisma.products.findMany()
    return { data: products, error: null }
  } catch (err) {
    console.error(err)
    return { data: null, error: err }
  }
})

ipcMain.handle('addProduct', async (_event, args) => {
  try {
    const product = await prisma.products.create({
      data: {
        product_name: args.productName,
        qty: args.productQty,
      },
    })
    return { data: product, error: null }
  } catch (err) {
    console.error(err)
    return { data: null, error: err }
  }
})

ipcMain.handle('deleteAllProducts', async () => {
  try {
    const { count } = await prisma.products.deleteMany({})
    return { data: count, error: null }
  } catch (err) {
    console.error(err)
    return { data: null, error: err }
  }
})
