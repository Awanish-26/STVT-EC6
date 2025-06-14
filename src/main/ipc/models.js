const { db } = require("./database");

// TraineeModel class database ke saath interact karne ke liye methods provide karta hai
// Ye class CRUD operations handle karti hai trainees table ke liye
class TraineeModel {
  // Saare trainees ko database se fetch karo, serial number ke order mein
  // Ye method database se "SELECT * FROM trainees" query run karta hai
  static getAll(callback) {
    const sql = `SELECT * FROM trainees ORDER BY serialNo`;
    db.all(sql, [], callback);
  }

  // Specific trainee ko ID se fetch karo
  // Sirf ek hi trainee return karega jo ID se match karta hai
  static getById(id, callback) {
    const sql = `SELECT * FROM trainees WHERE id = ?`;
    db.get(sql, [id], callback);
  }

  // Naya trainee database mein add karo
  // Saare fields ko extract karke INSERT query banata hai
  static create(trainee, callback) {
    const {
      serialNo,
      name,
      fatherName,
      batch,
      sex,
      designation,
      courseCode,
      courseName,
      courseDuration,
      tNo,
      trade,
      unit,
      divisionWorkshop,
      modeOfEntry,
      doj,
      referenceNo,
      sparingDate,
      referenceNo2,
      mobileNo,
      emailId,
      irimeeFrom,
      irimeeTo,
      zrtiFrom,
      zrtiTo,
      iridmFrom,
      iridmTo,
      remarkCertificateSrNo,
      referenceNo3,
      employmentNoPranNo,
      letter,
      hrmsId,
      billUnit,
      workingUnder,
      station,
      educationalQualification,
      educationalQualification2,
      branch,
      instituteCollege,
      specialization,
      passingYear,
      cgpaPercentage,
      additionalQualification,
      pastExperience,
      previousJobProfile,
      areaOfInterest,
      otherInformation,
      computerKnowledge,
    } = trainee;

    // Ye hai INSERT query jo saare fields ko database mein add karega
    const sql = `
      INSERT INTO trainees (
        serialNo, name, fatherName, batch, sex, designation, courseCode, courseName, courseDuration,
        tNo, trade, unit, divisionWorkshop, modeOfEntry, doj, referenceNo, sparingDate,
        referenceNo2, mobileNo, emailId, irimeeFrom, irimeeTo, zrtiFrom, zrtiTo, iridmFrom,
        iridmTo, remarkCertificateSrNo, referenceNo3, employmentNoPranNo, letter, hrmsId,
        billUnit, workingUnder, station, educationalQualification, educationalQualification2,
        branch, instituteCollege, specialization, passingYear, cgpaPercentage,
        additionalQualification, pastExperience, previousJobProfile, areaOfInterest,
        otherInformation, computerKnowledge
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Parameters array jo query mein ? ki jagah use hoga
    const params = [
      serialNo,
      name,
      fatherName,
      batch,
      sex,
      designation,
      courseCode,
      courseName,
      courseDuration,
      tNo,
      trade,
      unit,
      divisionWorkshop,
      modeOfEntry,
      doj,
      referenceNo,
      sparingDate,
      referenceNo2,
      mobileNo,
      emailId,
      irimeeFrom,
      irimeeTo,
      zrtiFrom,
      zrtiTo,
      iridmFrom,
      iridmTo,
      remarkCertificateSrNo,
      referenceNo3,
      employmentNoPranNo,
      letter,
      hrmsId,
      billUnit,
      workingUnder,
      station,
      educationalQualification,
      educationalQualification2,
      branch,
      instituteCollege,
      specialization,
      passingYear,
      cgpaPercentage,
      additionalQualification,
      pastExperience,
      previousJobProfile,
      areaOfInterest,
      otherInformation,
      computerKnowledge,
    ];

    // Database operation execute karo aur newly created row ka ID return karo
    db.run(sql, params, function (err) {
      if (err) {
        return callback(err, null);
      }
      const lastId = this && this.lastID !== undefined ? this.lastID : null;
      callback(null, { id: lastId });
    });
  }

  // Existing trainee ko update karo ID ke basis par
  // Saare fields ko update karta hai ek hi query mein
  static update(id, trainee, callback) {
    const {
      serialNo,
      name,
      fatherName,
      batch,
      sex,
      designation,
      courseCode,
      courseName,
      courseDuration,
      tNo,
      trade,
      unit,
      divisionWorkshop,
      modeOfEntry,
      doj,
      referenceNo,
      sparingDate,
      referenceNo2,
      mobileNo,
      emailId,
      irimeeFrom,
      irimeeTo,
      zrtiFrom,
      zrtiTo,
      iridmFrom,
      iridmTo,
      remarkCertificateSrNo,
      referenceNo3,
      employmentNoPranNo,
      letter,
      hrmsId,
      billUnit,
      workingUnder,
      station,
      educationalQualification,
      educationalQualification2,
      branch,
      instituteCollege,
      specialization,
      passingYear,
      cgpaPercentage,
      additionalQualification,
      pastExperience,
      previousJobProfile,
      areaOfInterest,
      otherInformation,
      computerKnowledge,
    } = trainee;

    // UPDATE query jo saare fields ko update karega provided ID ke liye
    const sql = `
      UPDATE trainees SET
        serialNo = ?, name = ?, fatherName = ?, batch = ?, sex = ?, designation = ?, 
        courseCode = ?, courseName = ?, courseDuration = ?, tNo = ?, trade = ?, 
        unit = ?, divisionWorkshop = ?, modeOfEntry = ?, doj = ?, referenceNo = ?, 
        sparingDate = ?, referenceNo2 = ?, mobileNo = ?, emailId = ?, irimeeFrom = ?, 
        irimeeTo = ?, zrtiFrom = ?, zrtiTo = ?, iridmFrom = ?, iridmTo = ?, 
        remarkCertificateSrNo = ?, referenceNo3 = ?, employmentNoPranNo = ?, letter = ?, 
        hrmsId = ?, billUnit = ?, workingUnder = ?, station = ?, educationalQualification = ?, 
        educationalQualification2 = ?, branch = ?, instituteCollege = ?, specialization = ?, 
        passingYear = ?, cgpaPercentage = ?, additionalQualification = ?, pastExperience = ?, 
        previousJobProfile = ?, areaOfInterest = ?, otherInformation = ?, computerKnowledge = ?,
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    // Parameters array, last parameter ID hai WHERE clause ke liye
    const params = [
      serialNo,
      name,
      fatherName,
      batch,
      sex,
      designation,
      courseCode,
      courseName,
      courseDuration,
      tNo,
      trade,
      unit,
      divisionWorkshop,
      modeOfEntry,
      doj,
      referenceNo,
      sparingDate,
      referenceNo2,
      mobileNo,
      emailId,
      irimeeFrom,
      irimeeTo,
      zrtiFrom,
      zrtiTo,
      iridmFrom,
      iridmTo,
      remarkCertificateSrNo,
      referenceNo3,
      employmentNoPranNo,
      letter,
      hrmsId,
      billUnit,
      workingUnder,
      station,
      educationalQualification,
      educationalQualification2,
      branch,
      instituteCollege,
      specialization,
      passingYear,
      cgpaPercentage,
      additionalQualification,
      pastExperience,
      previousJobProfile,
      areaOfInterest,
      otherInformation,
      computerKnowledge,
      id,
    ];

    db.run(sql, params, callback);
  }

  // Trainee ko ID ke basis par delete karo
  // Simple DELETE query hai jo ID se match karta hai
  static delete(id, callback) {
    const sql = `DELETE FROM trainees WHERE id = ?`;
    db.run(sql, [id], callback);
  }
}

module.exports = TraineeModel;
