"use client"
import React from 'react'
import { useState } from "react"
import { User, GraduationCap, Briefcase, Mail, Phone, MapPin, Edit, Save, X } from "lucide-react"
import DetailField from "./DetailField.jsx"
import FormField from "./FormField.jsx"
import { dropdownData } from "../../data/dropdownData.js"

const CandidateDetail = ({ candidate, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(candidate)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    onEdit(editData)
    setIsEditing(false)
    setIsSaving(false)
  }

  const handleCancel = () => {
    setEditData(candidate)
    setIsEditing(false)
  }

  const handleChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }))
  }

  const sections = [
    {
      title: "Personal Information",
      icon: <User className="h-5 w-5" />,
      color: "from-blue-400 to-cyan-400",
      fields: [
        { label: "S.No", field: "sNo", type: "text" },
        { label: "Name", field: "name", type: "text" },
        { label: "Father's Name", field: "fatherName", type: "text" },
        { label: "Batch", field: "batch", options: dropdownData.batches },
        { label: "Sex", field: "sex", options: dropdownData.sexOptions },
        { label: "Mobile No", field: "mobileNo", type: "tel" },
        { label: "Email", field: "email", type: "email" },
      ],
    },
    {
      title: "Course Information",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-emerald-400 to-teal-400",
      fields: [
        { label: "Course Code", field: "courseCode", options: dropdownData.courseCodes },
        { label: "Course Name", field: "courseName", options: dropdownData.courseNames },
        { label: "Course Duration", field: "courseDuration", options: dropdownData.courseDurations },
        { label: "Designation", field: "designation", options: dropdownData.designations },
        { label: "Trade", field: "trade", options: dropdownData.trades },
        { label: "Unit", field: "unit", options: dropdownData.units },
      ],
    },
    {
      title: "Educational Information",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-purple-400 to-pink-400",
      fields: [
        {
          label: "Educational Qualification",
          field: "educationalQualification",
          options: dropdownData.educationalQualifications,
        },
        { label: "Branch", field: "branch", options: dropdownData.branches },
        { label: "Institute/College", field: "instituteCollege", options: dropdownData.institutes },
        { label: "Specialization", field: "specialization", options: dropdownData.specializations },
        { label: "Passing Year", field: "passingYear", options: dropdownData.passingYears },
        { label: "CGPA/Percentage", field: "cgpaPercentage", options: dropdownData.cgpaRanges },
      ],
    },
    {
      title: "Work Information",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-orange-400 to-red-400",
      fields: [
        { label: "Working Under", field: "workingUnder", options: dropdownData.workingUnders },
        { label: "Station", field: "station", options: dropdownData.stations },
        { label: "DOJ", field: "doj", type: "date" },
        { label: "Mode of Entry", field: "modeOfEntry", options: dropdownData.entryModes },
        { label: "Division/Workshop", field: "divisionWorkshop", options: dropdownData.divisions },
        { label: "Past Experience", field: "pastExperience", options: dropdownData.experiences },
      ],
    },
  ]

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-rose-100 via-pink-50 to-teal-50 rounded-3xl soft-shadow-lg p-8 border border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              {candidate.name?.charAt(0)}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-3">{candidate.name}</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-rose-400" />
                  <span className="font-medium">{candidate.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">{candidate.mobileNo}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">{candidate.station}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Toggle Button */}
          <div className="flex space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                >
                  <X className="h-5 w-5" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-2xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 disabled:opacity-50 soft-shadow"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl hover:from-rose-500 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 soft-shadow"
              >
                <Edit className="h-5 w-5" />
                <span>Edit Details</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-xl rounded-3xl soft-shadow-lg p-8 border border-white/20 animate-slideIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className={`p-3 bg-gradient-to-r ${section.color} rounded-2xl text-white shadow-lg`}>
                {section.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="space-y-6">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  {isEditing ? (
                    <FormField
                      label={field.label}
                      field={field.field}
                      type={field.type}
                      options={field.options}
                      formData={editData}
                      onChange={handleChange}
                    />
                  ) : (
                    <DetailField label={field.label} value={candidate[field.field]} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      {(candidate.briefDescription || candidate.areaOfInterest || candidate.otherInfo) && (
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl soft-shadow-lg p-8 border border-white/20 animate-fadeIn">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl text-white shadow-lg">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Additional Information</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mt-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {candidate.briefDescription && (
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Brief Description</h4>
                {isEditing ? (
                  <FormField
                    label="Brief Description"
                    field="briefDescription"
                    type="textarea"
                    formData={editData}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">{candidate.briefDescription}</p>
                )}
              </div>
            )}

            {candidate.areaOfInterest && (
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Area of Interest</h4>
                {isEditing ? (
                  <FormField
                    label="Area of Interest"
                    field="areaOfInterest"
                    options={dropdownData.interests}
                    formData={editData}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">{candidate.areaOfInterest}</p>
                )}
              </div>
            )}

            {candidate.otherInfo && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 md:col-span-2">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Other Information</h4>
                {isEditing ? (
                  <FormField
                    label="Other Information"
                    field="otherInfo"
                    type="textarea"
                    formData={editData}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed">{candidate.otherInfo}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CandidateDetail
