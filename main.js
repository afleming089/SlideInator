const { app, BrowserWindow } = require("electron");
const { default: isDev } = require("electron-is-dev");
require("@electron/remote/main").initialize();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 650,
    height: 700,
    minWidth: 300,
    minHeight: 300,
    resizable: true,
    titleBarStyle: "hidden",
    ...(process.platform !== "darwin" ? { titleBarOverlay: true } : {}),
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000/"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
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
