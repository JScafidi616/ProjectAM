const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require ('url')
let win 


function createWindow(){
    win = new BrowserWindow ({width: 800, height:600, frame: true})
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, '\\App\\index.html'),
        protocol: 'file',
        slashes: true
    }))
    win.webContents.openDevTools()

    console.log("Log console: Corriendo aplicacion");
}

app.on('ready', createWindow)