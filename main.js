const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        preload: path.join(__dirname,'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }

  // 生命周期
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


  app.whenReady().then(() => {
    createWindow()
  
    // 激活窗口生命周期
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })