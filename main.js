const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow ;

function createWindow() {
  mainWindow = new BrowserWindow({
  width: 900,
  height: 700,
  fullscreen: true,
  frame: false,          // remove native buttons if you want custom ones
  alwaysOnTop: true,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    webviewTag: true      // allow webview
  }
});
  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on("close-app", () => {
  if (mainWindow) mainWindow.close();
});

app.on('window-all-closed', () => {
  app.quit();
});

