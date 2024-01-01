const {contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    loadPreferences: () => ipcRenderer.invoke('load-prefs')
})

export interface IElectronAPI {
    loadPreferences:()=>Promise<void>
}

declare global{
    interface window{
        electronAPI:IElectronAPI
    }
}



