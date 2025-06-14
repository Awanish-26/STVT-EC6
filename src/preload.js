const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getTrainees: () => ipcRenderer.invoke('trainees:getAll'),
    getTraineeById: (id) => ipcRenderer.invoke('trainees:getById', id),
    createTrainee: (data) => ipcRenderer.invoke('trainees:create', data),
    updateTrainee: (id, data) => ipcRenderer.invoke('trainees:update', id, data),
    deleteTrainee: (id) => ipcRenderer.invoke('trainees:delete', id),
});
