import { BrowserWindow, globalShortcut } from "electron"

export default function setShortcut(win: BrowserWindow) {
  globalShortcut.register('CommandOrControl+Shift+i', ()=> {
    console.log('f12');
    win.webContents.openDevTools()
  })
}