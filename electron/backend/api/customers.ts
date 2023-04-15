import { ipcMain } from 'electron'
import { prisma } from './shared/prismaClient'

ipcMain.handle('getCustomers', async () => {
  try {
    const customers = await prisma.customers.findMany()
    console.log(customers)
    return { data: customers, error: null }
  } catch (err) {
    console.error(err)
    return { data: null, err }
  }
})

ipcMain.handle('addCustomer', async (_event, args) => {
  try {
    const newCustomer = await prisma.customers.create({
      data: {
        name: args.customerName,
        city: args.city,
        mobileNumber: args.mobileNumber,
      },
    })
    return { data: newCustomer, error: null }
  } catch (err) {
    console.error(err)
    return { data: null, error: err }
  }
})

ipcMain.handle('deleteAllCustomers', async () => {
  try {
    const { count } = await prisma.customers.deleteMany()
    return { data: count, error: null }
  } catch (err) {
    console.error(err)
    return { data: null, err }
  }
})
