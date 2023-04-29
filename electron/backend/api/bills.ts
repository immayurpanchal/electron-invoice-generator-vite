import { ipcMain } from 'electron'
import { prisma } from './shared/prismaClient'
import type { BillTableProduct } from '../../../src/types/shared'

interface SaveBillArgsType {
  customerId: number
  billProducts: BillTableProduct[]
  date: Date
}

ipcMain.handle('createBill', async (_event, args: SaveBillArgsType) => {
  const { customerId, billProducts, date } = args
  // create a new bill
  const bill = await prisma.bills.create({
    data: {
      customerId,
      date: new Date(date),
    },
  })

  // create bill items
  for (const product of billProducts) {
    await prisma.bill_items.create({
      data: {
        billId: bill.id,
        productId: product.id,
        qty: product.qty,
        price: product.bill_price,
      },
    })
  }

  return { data: bill }
})

ipcMain.handle('getBillNo', async () => {
  const billNo = await prisma.bills.count()
  return { data: billNo + 1 }
})
