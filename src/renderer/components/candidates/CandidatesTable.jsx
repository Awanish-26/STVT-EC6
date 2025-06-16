"use client"
import React from 'react'
import { Eye, Edit, Trash2, Mail, Phone, Users, Star, MapPin } from "lucide-react"

const CandidatesTable = ({ candidates, onViewDetail, onEdit, onDelete }) => {
  const getGradientColor = (index) => {
    const gradients = [
      "from-blue-500 to-blue-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-orange-500 to-orange-600",
      "from-red-500 to-red-600",
      "from-indigo-500 to-indigo-600",
    ]
    return gradients[index % gradients.length]
  }

  return (
    <div className="bg-white rounded-2xl soft-shadow-lg overflow-hidden border border-gray-200 animate-fadeIn">
      {/* Table Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-xl">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">Candidate Directory</h3>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Academic Info
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contact & Location
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {candidates.map((candidate, index) => (
              <tr key={candidate.id} className="hover:bg-blue-50 transition-colors duration-200 group">
                {/* Candidate Info */}
                <td className="px-6 py-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${getGradientColor(index)} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md`}
                    >
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 mb-1">{candidate.name}</div>
                      <div className="text-xs text-gray-500 mb-1">S.No: {candidate.serialNo}</div>
                      <div className="text-xs text-gray-400">Father: {candidate.fatherName}</div>
                    </div>
                  </div>
                </td>

                {/* Academic Info */}
                <td className="px-6 py-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {candidate.batch}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {candidate.branch}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 font-medium">{candidate.specialization}</div>
                    <div className="text-xs text-gray-500">{candidate.instituteCollege}</div>
                  </div>
                </td>

                {/* Contact & Location */}
                <td className="px-6 py-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="h-3 w-3 text-blue-500" />
                      <span className="truncate max-w-40">{candidate.emailId}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-3 w-3 text-green-500" />
                      <span>{candidate.mobileNo}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-3 w-3 text-purple-500" />
                      <span>{candidate.station}</span>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs text-gray-600">{candidate.designation}</span>
                    </div>
                    <div className="text-xs text-gray-500">DOJ: {candidate.doj}</div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </td>

                {/* Actions - Always visible and bigger */}
                <td className="px-6 py-6">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onViewDetail(candidate)}
                      className="p-3 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-xl transition-all duration-200 soft-shadow border border-blue-200"
                      title="View Details"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => onEdit(candidate)}
                      className="p-3 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-xl transition-all duration-200 soft-shadow border border-green-200"
                      title="Edit"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => onDelete(candidate.id, candidate.name)}
                      className="p-3 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-xl transition-all duration-200 soft-shadow border border-red-200"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {candidates.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No candidates found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search criteria or add a new candidate to get started.
          </p>
        </div>
      )}
    </div>
  )
}

export default CandidatesTable
