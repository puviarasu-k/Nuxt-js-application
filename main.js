const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'public/logo.ico',
    webPreferences: {
      nodeIntegration: true
    }
  })

  const indexPath = path.join(__dirname, '.output/public/index.html');

  win.loadFile(indexPath);

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})