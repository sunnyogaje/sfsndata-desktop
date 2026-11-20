const { app, BrowserWindow, shell } = require('electron');

const APP_URL = process.env.SFSNDATA_URL || 'https://sfsndata.com.ng/login';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    title: 'SFSNData',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.once('ready-to-show', () => {
    win.maximize();
    win.show();
  });

  win.setMenuBarVisibility(false);
  win.loadURL(APP_URL);

  // Keep navigation inside the app (site + its own redirects, e.g. payment
  // providers) but send anything truly external to the system browser.
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  return win;
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
