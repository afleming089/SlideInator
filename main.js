const { app, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: true,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  win.loadURL("http://localhost:3000/");
};

app.whenReady().then(() => {
  createWindow();
});

// macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
