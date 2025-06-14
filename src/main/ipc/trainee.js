const { ipcMain } = require('electron');
const TraineeModel = require('./models');

// Get all trainees
ipcMain.handle('trainees:getAll', async () => {
  return new Promise((resolve, reject) => {
    TraineeModel.getAll((err, rows) => {
      if (err) return reject(err.message);
      resolve(rows);
    });
  });
});

// Get trainee by ID
ipcMain.handle('trainees:getById', async (event, id) => {
  return new Promise((resolve, reject) => {
    TraineeModel.getById(id, (err, row) => {
      if (err) return reject(err.message);
      if (!row) return reject('Trainee not found');
      resolve(row);
    });
  });
});

// Create new trainee
ipcMain.handle('trainees:create', async (event, data) => {
  return new Promise((resolve, reject) => {
    if (!data.name) return reject('Name is required');

    TraineeModel.create(data, (err, result) => {
      if (err) return reject(err.message);
      resolve({ id: result.id });
    });
  });
});

// Update trainee
ipcMain.handle('trainees:update', async (event, id, data) => {
  return new Promise((resolve, reject) => {
    if (!data.name) return reject('Name is required');

    TraineeModel.update(id, data, (err) => {
      if (err) return reject(err.message);
      resolve({ success: true });
    });
  });
});

// Delete trainee
ipcMain.handle('trainees:delete', async (event, id) => {
  return new Promise((resolve, reject) => {
    TraineeModel.delete(id, (err) => {
      if (err) return reject(err.message);
      resolve({ success: true });
    });
  });
});
