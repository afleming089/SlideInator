const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: true,
  });

  win.loadFile("./render/dashboard/dashboard.html");
};

app.whenReady().then(() => {
  createWindow();
});
