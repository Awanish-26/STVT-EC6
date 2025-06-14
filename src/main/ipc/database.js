const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");
const { app } = require("electron");

// Database ka path user data folder mein set karo
// Har user ke liye alag database file hogi
const dbPath = path.join(app.getPath("userData"), "database.sqlite");

// Agar user data folder exist nahi karta, to pehle create karo
// Taki database file save karne mein error na aaye
if (!fs.existsSync(app.getPath("userData"))) {
  fs.mkdirSync(app.getPath("userData"), { recursive: true });
}

// SQLite database connection create karo
// Ye connection pure app mein use hoga
const db = new sqlite3.Database(dbPath);

// Database ko initialize karne ka function
// Ye function tables create karta hai agar exist nahi karte
const initializeDatabase = () => {
  db.serialize(() => {
    // Trainees table create karo with all required fields
    // PRIMARY KEY AUTOINCREMENT se ID automatic generate hoga
    // DEFAULT CURRENT_TIMESTAMP se timestamp fields auto-update honge
    db.run(`
      CREATE TABLE IF NOT EXISTS trainees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        serialNo INTEGER,
        name TEXT NOT NULL,
        fatherName TEXT,
        batch TEXT,
        sex TEXT,
        designation TEXT,
        courseCode TEXT,
        courseName TEXT,
        courseDuration TEXT,
        tNo TEXT,
        trade TEXT,
        unit TEXT,
        divisionWorkshop TEXT,
        modeOfEntry TEXT,
        doj TEXT,
        referenceNo TEXT,
        sparingDate TEXT,
        referenceNo2 TEXT,
        mobileNo TEXT,
        emailId TEXT,
        irimeeFrom TEXT,
        irimeeTo TEXT,
        zrtiFrom TEXT,
        zrtiTo TEXT,
        iridmFrom TEXT,
        iridmTo TEXT,
        remarkCertificateSrNo TEXT,
        referenceNo3 TEXT,
        employmentNoPranNo TEXT,
        letter TEXT,
        hrmsId TEXT,
        billUnit TEXT,
        workingUnder TEXT,
        station TEXT,
        educationalQualification TEXT,
        educationalQualification2 TEXT,
        branch TEXT,
        instituteCollege TEXT,
        specialization TEXT,
        passingYear TEXT,
        cgpaPercentage TEXT,
        additionalQualification TEXT,
        pastExperience TEXT,
        previousJobProfile TEXT,
        areaOfInterest TEXT,
        otherInformation TEXT,
        computerKnowledge TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Database initialized"); // Log message to confirm initialization
  });
};

// Database connection aur initialize function ko export karo
// Taki dusre files mein use kar sake
module.exports = { db, initializeDatabase };
