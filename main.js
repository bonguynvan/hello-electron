const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('./index.html')
  // win.loadURL('https://github.com/bonguynvan')
  const contents = win.webContents
console.log(contents)
}

app.whenReady().then(() => {
  console.log('Hello from Electron 👋')
  ipcMain.handle('ping', () => 'pong')
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
