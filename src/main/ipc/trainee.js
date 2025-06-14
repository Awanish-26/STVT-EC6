const { ipcMain } = require("electron");
const TraineeModel = require("./models");

// Ye file IPC (Inter-Process Communication) handlers set karta hai
// Taki renderer process (frontend) database operations trigger kar sake

// Saare trainees ko database se fetch karne ka handler
// Frontend se "trainees:getAll" message milne par ye chalega
ipcMain.handle("trainees:getAll", async () => {
  return new Promise((resolve, reject) => {
    TraineeModel.getAll((err, rows) => {
      if (err) return reject(err.message); // Error aane par reject karo
      resolve(rows); // Success hone par data return karo
    });
  });
});

// Specific trainee ko ID se fetch karne ka handler
// Agar ID valid nahi hai to error dega
ipcMain.handle("trainees:getById", async (event, id) => {
  return new Promise((resolve, reject) => {
    TraineeModel.getById(id, (err, row) => {
      if (err) return reject(err.message);
      if (!row) return reject("Trainee not found"); // Agar trainee nahi mila to error
      resolve(row);
    });
  });
});

// Naya trainee create karne ka handler
// Name field zaroori hai, nahi to error dega
ipcMain.handle("trainees:create", async (event, data) => {
  return new Promise((resolve, reject) => {
    if (!data.name) return reject("Name is required"); // Validation check

    TraineeModel.create(data, (err, result) => {
      if (err) return reject(err.message);
      resolve({ id: result.id }); // New trainee ka ID return karo
    });
  });
});

// Existing trainee ko update karne ka handler
// ID aur data dono chahiye, name field zaroori hai
ipcMain.handle("trainees:update", async (event, id, data) => {
  return new Promise((resolve, reject) => {
    if (!data.name) return reject("Name is required");

    TraineeModel.update(id, data, (err) => {
      if (err) return reject(err.message);
      resolve({ success: true }); // Success message return karo
    });
  });
});

// Trainee ko delete karne ka handler
// ID se trainee ko database se remove karta hai
ipcMain.handle("trainees:delete", async (event, id) => {
  return new Promise((resolve, reject) => {
    TraineeModel.delete(id, (err) => {
      if (err) return reject(err.message);
      resolve({ success: true }); // Success message return karo
    });
  });
});
