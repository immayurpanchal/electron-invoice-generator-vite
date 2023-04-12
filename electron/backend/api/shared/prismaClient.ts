import { PrismaClient } from '../../../../resources'
import path from 'path'
import fs from 'fs'

const isDev = process.env.NODE_ENV === 'development'

let dbPath

if (isDev) {
  dbPath = path.join(__dirname, '..', '..', '..', '..', 'resources', 'dev.db')
} else {
  dbPath = path.join(process.resourcesPath, 'dev.db')
}

if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true })
  fs.closeSync(fs.openSync(dbPath, 'w'))
}

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})
