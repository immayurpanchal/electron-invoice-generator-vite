import { ipcMain } from 'electron'
import { prisma } from './shared/prismaClient'

ipcMain.handle('getProducts', async () => {
  try {
    const products = await prisma.products.findMany()
    return products
  } catch (err) {
    console.error(err)
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
    return product
  } catch (err) {
    console.error(err)
    return err
  }
})
