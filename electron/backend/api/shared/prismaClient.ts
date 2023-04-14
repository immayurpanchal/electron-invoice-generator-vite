import { PrismaClient } from '../../../../resources'
import path from 'path'
import fs from 'fs'

const isDev = process.env.NODE_ENV === 'development'

let dbPath

/*
 Note: Make sure you set the correct path after running the npx prisma generate command
 schema.prisma file contains the output path where generated client is stored and we've to use that client 
 for both production and dev environment

 - Best practice is to create the separate folder(i.e. resources) where the generated output gets stored
 and add that in build config of electron-builder
 
 */
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
