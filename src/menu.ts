import { Menu } from "electron"

export default function setMenu() {
  Menu.setApplicationMenu(null)
  // const menu = Menu.buildFromTemplate([{ label: 'Edit', submenu: [{ role: 'undo'}]}])
  // Menu.setApplicationMenu(menu)
}