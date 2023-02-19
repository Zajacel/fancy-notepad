const path = require('path');

// Setup electron

const { app, BrowserWindow } = require('electron');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { worldSafeExecuteJavaScript: true }
    });

    if (process.env.NODE_ENV = 'dev') win.webContents.openDevTools();

    win.loadFile(path.join(__dirname, 'index.html'));
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
