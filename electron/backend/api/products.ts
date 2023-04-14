import { ipcMain } from 'electron'
import { prisma } from './shared/prismaClient'

ipcMain.handle('getProducts', async (event, args) => {
  try {
    const products = await prisma.products.findMany()
    return products
  } catch (err) {
    console.error(err)
  }
})
