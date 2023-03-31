import { ipcMain } from 'electron'
import { prisma } from './shared/prismaClient'

ipcMain.handle('getProducts', async (event, args) => {
  const products = await prisma.products.findMany()
  return products
})
