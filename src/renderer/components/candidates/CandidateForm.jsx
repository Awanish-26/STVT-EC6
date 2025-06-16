"use client"
import React from 'react'
import { useState } from "react"
import { Save, X, Sparkles } from "lucide-react"
import FormSection from "./FormSection.jsx"
import FormField from "./FormField.jsx"

const CandidateForm = ({ candidate, dropdownData, onSubmit, onCancel, isEdit = false, isLoading = false }) => {
  const [formData, setFormData] = useState(
    candidate || {
      iridmFrom: "",
      iridmTo: "",
      remarkCertificateSrNo: "",
      referenceNo: "",
      employmentNoPranNo: "",
      letter: "",
      hrmsId: "",
      billUnit: "",
      workingUnder: "",
      station: "",
      educationalQualification: "",
      educationalQualification2: "",
      branch: "",
      instituteCollege: "",
      specialization: "",
      passingYear: "",
      cgpaPercentage: "",
      additionalQualification: "",
      pastExperience: "",
      previousJobProfile: "",
      areaOfInterest: "",
      otherInformation: "",
      serialNo: "",
      name: "",
      fatherName: "",
      batch: "",
      sex: "",
      designation: "",
      courseCode: "",
      courseName: "",
      courseDuration: "",
      tNo: "",
      trade: "",
      unit: "",
      divisionWorkshop: "",
      modeOfEntry: "",
      doj: "",
      referenceNo2: "",
      sparingDate: "",
      referenceNo3: "",
      mobileNo: "",
      emailId: "",
      irimeeFrom: "",
      irimeeTo: "",
      zrtiFrom: "",
      zrtiTo: "",
      computerKnowledge: "",
    },
  )

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Rename (or map) candidate object keys to match backend's expected field names.
    const candidateData = {
      serialNo: (formData.serialNo) ? formData.serialNo : "",
      name: (formData.name) ? formData.name : "",
      fatherName: (formData.fatherName) ? formData.fatherName : "",
      batch: (formData.batch) ? formData.batch : "",
      sex: (formData.sex) ? formData.sex : "",
      designation: (formData.designation) ? formData.designation : "",
      courseCode: (formData.courseCode) ? formData.courseCode : "",
      courseName: (formData.courseName) ? formData.courseName : "",
      courseDuration: (formData.courseDuration) ? formData.courseDuration : "",
      tNo: (formData.tNo) ? formData.tNo : "",
      trade: (formData.trade) ? formData.trade : "",
      unit: (formData.unit) ? formData.unit : "",
      divisionWorkshop: (formData.divisionWorkshop) ? formData.divisionWorkshop : "",
      modeOfEntry: (formData.modeOfEntry) ? formData.modeOfEntry : "",
      doj: (formData.doj) ? formData.doj : "",
      referenceNo: (formData.referenceNo) ? formData.referenceNo : "",
      sparingDate: (formData.sparingDate) ? formData.sparingDate : "",
      referenceNo2: (formData.referenceNo2) ? formData.referenceNo2 : "",
      mobileNo: (formData.mobileNo) ? formData.mobileNo : "",
      emailId: (formData.emailId) ? formData.emailId : "",
      irimeeFrom: (formData.irimeeFrom) ? formData.irimeeFrom : "",
      irimeeTo: (formData.irimeeTo) ? formData.irimeeTo : "",
      zrtiFrom: (formData.zrtiFrom) ? formData.zrtiFrom : "",
      zrtiTo: (formData.zrtiTo) ? formData.zrtiTo : "",
      iridmFrom: (formData.iridmFrom) ? formData.iridmFrom : "",
      iridmTo: (formData.iridmTo) ? formData.iridmTo : "",
      remarkCertificateSrNo: (formData.remarkCertificateSrNo) ? formData.remarkCertificateSrNo : "",
      referenceNo3: (formData.referenceNo3) ? formData.referenceNo3 : "",
      employmentNoPranNo: (formData.employmentNoPranNo) ? formData.employmentNoPranNo : "",
      letter: (formData.letter) ? formData.letter : "",
      hrmsId: (formData.hrmsId) ? formData.hrmsId : "",
      billUnit: (formData.billUnit) ? formData.billUnit : "",
      workingUnder: (formData.workingUnder) ? formData.workingUnder : "",
      station: (formData.station) ? formData.station : "",
      educationalQualification: (formData.educationalQualification) ? formData.educationalQualification : "",
      educationalQualification2: (formData.educationalQualification2) ? formData.educationalQualification2 : "",
      branch: (formData.branch) ? formData.branch : "",
      instituteCollege: (formData.instituteCollege) ? formData.instituteCollege : "",
      specialization: (formData.specialization) ? formData.specialization : "",
      passingYear: (formData.passingYear) ? formData.passingYear : "",
      cgpaPercentage: (formData.cgpaPercentage) ? formData.cgpaPercentage : "",
      additionalQualification: (formData.additionalQualification) ? formData.additionalQualification : "",
      pastExperience: (formData.pastExperience) ? formData.pastExperience : "",
      previousJobProfile: (formData.previousJobProfile) ? formData.previousJobProfile : "",
      areaOfInterest: (formData.areaOfInterest) ? formData.areaOfInterest : "",
      otherInformation: (formData.otherInformation) ? formData.otherInformation : "",
      computerKnowledge: (formData.computerKnowledge) ? formData.computerKnowledge : "",
    };
    onSubmit(candidateData);
  }

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-3xl soft-shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white rounded-2xl shadow-sm">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{isEdit ? "Update Candidate" : "Add New Candidate"}</h2>
              <p className="text-gray-600">
                Fill in the details below to {isEdit ? "update" : "create"} candidate profile
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <FormSection title="Basic Information" icon="👤" color="from-blue-500 to-blue-600">
            <FormField label="S.No" field="serialNo" type="text" required formData={formData} onChange={handleChange} />
            <FormField label="Name" field="name" type="text" required formData={formData} onChange={handleChange} />
            <FormField
              label="Father's Name"
              field="fatherName"
              type="text"
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Batch"
              field="batch"
              options={dropdownData.batches}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Sex"
              field="sex"
              options={dropdownData.sexOptions}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Designation"
              field="designation"
              options={dropdownData.designations}
              required
              formData={formData}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Course Information" icon="🎓" color="from-green-500 to-green-600">
            <FormField
              label="Course Code"
              field="courseCode"
              options={dropdownData.courseCodes}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Course Name"
              field="courseName"
              options={dropdownData.courseNames}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Course Duration"
              field="courseDuration"
              options={dropdownData.courseDurations}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField label="T.No" field="tNo" type="text" formData={formData} onChange={handleChange} />
            <FormField
              label="Trade"
              field="trade"
              options={dropdownData.trades}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Unit"
              field="unit"
              options={dropdownData.units}
              formData={formData}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Work Information" icon="💼" color="from-purple-500 to-purple-600">
            <FormField
              label="Division/Workshop"
              field="divisionWorkshop"
              options={dropdownData.divisions}
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Mode of Entry"
              field="modeOfEntry"
              options={dropdownData.entryModes}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Date of Joining"
              field="doj"
              type="date"
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Employment No/PRAN No"
              field="employmentNoPranNo"
              options={dropdownData.employmentNumbers}
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Working Under"
              field="workingUnder"
              options={dropdownData.workingUnders}
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Station"
              field="station"
              options={dropdownData.stations}
              required
              formData={formData}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Educational Information" icon="📚" color="from-orange-500 to-orange-600">
            <FormField
              label="Educational Qualification"
              field="educationalQualification"
              options={dropdownData.educationalQualifications}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Additional Educational Qualification"
              field="educationalQualification2"
              options={dropdownData.educationalQualifications}
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Branch"
              field="branch"
              options={dropdownData.branches}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Institute/College"
              field="instituteCollege"
              options={dropdownData.institutes}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Specialization"
              field="specialization"
              options={dropdownData.specializations}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Passing Year"
              field="passingYear"
              options={dropdownData.passingYears}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="CGPA/Percentage"
              field="cgpaPercentage"
              options={dropdownData.cgpaRanges}
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Past Experience"
              field="pastExperience"
              options={dropdownData.experiences}
              formData={formData}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Contact Information" icon="📞" color="from-indigo-500 to-indigo-600">
            <FormField
              label="Mobile No"
              field="mobileNo"
              type="tel"
              required
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Email ID"
              field="emailId"
              type="email"
              required
              formData={formData}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Additional Information" icon="📝" color="from-pink-500 to-pink-600">
            <FormField
              label="Additional Qualification"
              field="additionalQualification"
              type="textarea"
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Remark Certificate Sr No"
              field="remarkCertificateSrNo"
              type="text"
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="IRIMEE To"
              field="irimeeTo"
              type="date"
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="ZRTI From"
              field="zrtiFrom"
              type="date"
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="ZRTI To"
              field="zrtiTo"
              type="date"
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Previous Job Profile"
              field="previousJobProfile"
              type="text"
              formData={formData}
              onChange={handleChange}
            />
            <FormField
              label="Other Information"
              field="otherInformation"
              type="textarea"
              formData={formData}
              onChange={handleChange}
            />
          </FormSection>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-8 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              disabled={isLoading}
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
            >
              <X className="h-5 w-5" />
              <span className="font-medium">Cancel</span>
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed soft-shadow"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span className="font-medium">Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  <span className="font-medium">{isEdit ? "Update" : "Save"} Candidate</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CandidateForm
