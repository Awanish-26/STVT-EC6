export const INITIAL_CANDIDATE_STATE = {
  // Working Under section
  workingUnder: '',
  station: '',
  educationalQualification: '',
  educationalQualificationDetails: '',
  branch: '',
  instituteCollege: '',
  specialization: '',
  passingYear: '',
  cgpaPercentage: '',
  additionalQualifications: '',
  pastExperience: '',
  briefDescription: '',
  areaOfInterest: '',
  additionalInfo: '',
  knowledgeOfComputer: '',
  
  // Personal Details section
  name: '',
  fatherName: '',
  batch: '',
  sex: '',
  designation: '',
  courseCode: '',
  courseName: '',
  courseDuration: '',
  tNo: '',
  trade: '',
  unit: '',
  divisionWorkshop: '',
  modeOfEntry: '',
  doj: '',
  referenceNo: '',
  sparingDate: '',
  referenceNo2: '',
  mobileNo: '',
  email: ''
};

export const FORM_FIELDS = {
  workingDetails: [
    { name: 'workingUnder', label: 'Working Under', type: 'select' },
    { name: 'station', label: 'Station', type: 'select' },
    { name: 'educationalQualification', label: 'Educational Qualification', type: 'select' },
    { name: 'educationalQualificationDetails', label: 'Educational Qualification Details', type: 'text' },
    { name: 'branch', label: 'Branch', type: 'select' },
    { name: 'instituteCollege', label: 'Institute/College', type: 'text' },
    { name: 'specialization', label: 'Specialization', type: 'text' },
    { name: 'passingYear', label: 'Passing Year', type: 'select' },
    { name: 'cgpaPercentage', label: 'CGPA/Percentage', type: 'text' },
    { name: 'additionalQualifications', label: 'Additional Qualifications', type: 'textarea' },
    { name: 'pastExperience', label: 'Past Experience', type: 'textarea' },
    { name: 'briefDescription', label: 'Brief Description of Previous Job Profile', type: 'textarea' },
    { name: 'areaOfInterest', label: 'Area of Interest', type: 'textarea' },
    { name: 'additionalInfo', label: 'Any Other Information', type: 'textarea' },
    { name: 'knowledgeOfComputer', label: 'Knowledge of Computer', type: 'select' }
  ],
  personalDetails: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'fatherName', label: "Father's Name", type: 'text' },
    { name: 'batch', label: 'Batch', type: 'text' },
    { name: 'sex', label: 'Sex', type: 'radio' },
    { name: 'designation', label: 'Designation', type: 'select' },
    { name: 'courseCode', label: 'Course Code', type: 'text' },
    { name: 'courseName', label: 'Course Name', type: 'text' },
    { name: 'courseDuration', label: 'Course Duration', type: 'select' },
    { name: 'tNo', label: 'T. No.', type: 'text' },
    { name: 'trade', label: 'Trade', type: 'select' },
    { name: 'unit', label: 'Unit', type: 'text' },
    { name: 'divisionWorkshop', label: 'Division/Workshop', type: 'text' },
    { name: 'modeOfEntry', label: 'Mode of Entry', type: 'select' },
    { name: 'doj', label: 'Date of Joining (DOJ)', type: 'date' },
    { name: 'referenceNo', label: 'Reference No.', type: 'text' },
    { name: 'sparingDate', label: 'Sparing Date', type: 'date' },
    { name: 'referenceNo2', label: 'Reference No. (2)', type: 'text' },
    { name: 'mobileNo', label: 'Mobile No. (WhatsApp)', type: 'tel' },
    { name: 'email', label: 'E-Mail ID', type: 'email' }
  ]
};

export const FORM_OPTIONS = {
  workingUnder: ['Department A', 'Department B', 'Department C', 'External'],
  station: ['Station 1', 'Station 2', 'Station 3', 'Head Office'],
  educationalQualification: ['B.Tech', 'M.Tech', 'B.Sc', 'M.Sc', 'MBA', 'Diploma', 'Other'],
  branch: ['Computer Science', 'Electrical', 'Mechanical', 'Civil', 'Electronics', 'Other'],
  passingYear: Array.from({length: 30}, (_, i) => (new Date().getFullYear() - i).toString()),
  knowledgeOfComputer: ['Excellent', 'Good', 'Average', 'Basic', 'None'],
  sex: ['Male', 'Female', 'Other'],
  designation: ['Junior Engineer', 'Assistant Engineer', 'Engineer', 'Senior Engineer', 'Other'],
  courseDuration: ['1 Month', '3 Months', '6 Months', '1 Year', '2 Years', 'Other'],
  trade: ['Technical', 'Administrative', 'Operations', 'Maintenance', 'Other'],
  modeOfEntry: ['Direct Recruitment', 'Promotion', 'Transfer', 'Deputation', 'Other']
};
