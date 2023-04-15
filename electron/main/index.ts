import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { appendFile } from 'node:fs'
import { homedir, platform, release } from 'node:os'
import { join } from 'node:path'
import '../backend/api/products'
import '../backend/api/customers'
import { prisma } from '../backend/api/shared/prismaClient'
import { update } from './update'

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, '../')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST

const handleLogging = (err) => {
  // Create log message
  const logMessage = `Uncaught Exception: ${new Date().toISOString()} - ${
    err.stack
  }\n`

  // Get desktop folder path based on operating system
  const desktopPath =
    platform() === 'win32'
      ? join(homedir(), 'Desktop')
      : join(homedir(), 'Desktop')

  // Create or append to the log file
  appendFile(join(desktopPath, 'mayur.log'), logMessage, (err) => {
    if (err) {
      console.error('Failed to write log:', err)
    } else {
      console.log('Log written successfully.')
    }
  })
}

process.on('uncaughtException', handleLogging)
process.on('unhandledRejection', handleLogging)
process.on('uncaughtExceptionMonitor', handleLogging)

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')

async function connectDB() {
  try {
    await prisma.$connect()
    console.log('Connected to PostgreSQL database!')
    // migrateDatabase()
  } catch (error) {
    console.error('Error connecting to the database', error)
    process.exit(1)
  }
}

async function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    title: 'Main window',
    icon: join(process.env.PUBLIC, 'favicon.ico'),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  connectDB()

  if (process.env.VITE_DEV_SERVER_URL) {
    // electron-vite-vue#298
    win.loadURL(url)
    // Open devTool if the app is not packaged
    win.webContents.openDevTools()
  } else {
    win.loadFile(indexHtml)
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })

  // Apply electron-updater
  update(win)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`)
  } else {
    childWindow.loadFile(indexHtml, { hash: arg })
  }
})

// Handle the print-preview event from the renderer process
// ipcMain.on('print-preview', (event) => {
//   // Capture the current window's contents as a PDF
//   win.webContents
//     .printToPDF({
//       pageSize: 'A4',
//       landscape: true,
//       margins: {
//         bottom: 0,
//         left: 0,
//         right: 0,
//         top: 0,
//       },
//       scale: 0.5,
//     })
//     .then((data: any, err: any) => {
//       if (err) throw err

//       // Create a temporary PDF file
//       const pdfPath = join(tmpdir(), 'print_preview.pdf')
//       writeFile(pdfPath, data, (error) => {
//         if (error) throw error

//         // Open the PDF in the default PDF viewer on macOS
//         shell.openExternal('file://' + pdfPath)
//       })
//     })
// })
