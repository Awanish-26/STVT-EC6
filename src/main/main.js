const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const { initializeDatabase } = require("./ipc/database");
require("./ipc/models"); // Ensure the model is loaded before using it
require("./ipc/trainee");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

// Ye function main window create karta hai apne app ka
const createWindow = () => {
  // Browser window create karo - ye hamara main application window hai
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY, // Preload script jo renderer process mein kaam aayega
      nodeIntegration: false, // Security ke liye node integration band rakho
    },
  });

  // App ka HTML load karo window mein
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

// Jab Electron initialize ho jaye, tab ye function chalega
// Ye hamara main entry point hai application ka
app.whenReady().then(() => {
  // Database ko initialize karo - taki trainee data store kar sake
  initializeDatabase();
  createWindow();

  // MacOS ke liye special handling - dock icon click hone par window restore karo
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Jab saare windows band ho jaye, tab app ko band karo (except MacOS)
// MacOS mein user ko manually Cmd+Q press karna padta hai
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Baki ke main process specific code yahaan add kar sakte hai
// Ya phir alag files mein daal kar import kar sakte hai
