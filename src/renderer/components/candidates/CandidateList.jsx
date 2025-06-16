"use client"
import React from 'react'
import { useState } from "react"
import { Users, TrendingUp, Award, Clock } from "lucide-react"
import SearchAndFilters from "./SearchAndFilter.jsx" 
import CandidatesTable from "./CandidatesTable.jsx"
import ConfirmationModal from "../common/ConfirmationModal.jsx"

const CandidateList = ({ candidates, onViewDetail, onEdit, onDelete, dropdownData }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBatch, setFilterBatch] = useState("")
  const [filterBranch, setFilterBranch] = useState("")
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, candidateId: null, candidateName: "" })
  const [isDeleting, setIsDeleting] = useState(false)

  const filteredCandidates = candidates.filter((candidate) => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = 
      (candidate.name && candidate.name.toLowerCase().includes(searchTermLower)) ||
      (candidate.emailId && candidate.emailId.toLowerCase().includes(searchTermLower)) ||
      (candidate.serialNo && candidate.serialNo.toString().includes(searchTerm));
    const matchesBatch = !filterBatch || (candidate.batch && candidate.batch === filterBatch);
    const matchesBranch = !filterBranch || (candidate.branch && candidate.branch === filterBranch);

    return matchesSearch && matchesBatch && matchesBranch;
  })

  const handleDeleteClick = (candidateId, candidateName) => {
    setDeleteModal({
      isOpen: true,
      candidateId,
      candidateName,
    })
  }

  const handleDeleteConfirm = async () => {
    setIsDeleting(true)
    try {
      await onDelete(deleteModal.candidateId)
      setDeleteModal({ isOpen: false, candidateId: null, candidateName: "" })
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, candidateId: null, candidateName: "" })
  }

  // Statistics
  const stats = [
    {
      title: "Total Candidates",
      value: candidates.length,
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Batches",
      value: [...new Set(candidates.map((c) => c.batch))].length,
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Specializations",
      value: [...new Set(candidates.map((c) => c.specialization))].length,
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Recent Entries",
      value: candidates.filter((c) => new Date(c.doj) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length,
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <>
      <div className="space-y-8 animate-fadeIn">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 soft-shadow hover:shadow-lg transition-shadow duration-200`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl text-white shadow-md`}>{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <SearchAndFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterBatch={filterBatch}
          setFilterBatch={setFilterBatch}
          filterBranch={filterBranch}
          setFilterBranch={setFilterBranch}
          dropdownData={dropdownData}
        />

        {/* Results Summary */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 soft-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">
                Showing {filteredCandidates.length} of {candidates.length} candidates
              </span>
            </div>
            {(searchTerm || filterBatch || filterBranch) && (
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Filters applied:</span>
                {searchTerm && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">Search: {searchTerm}</span>
                )}
                {filterBatch && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg">Batch: {filterBatch}</span>
                )}
                {filterBranch && (
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg">Branch: {filterBranch}</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Candidates Table */}
        <CandidatesTable
          candidates={filteredCandidates}
          onViewDetail={onViewDetail}
          onEdit={onEdit}
          onDelete={handleDeleteClick}
        />
      </div>

      {/* Confirmation Modal - Rendered outside main content */}
      <ConfirmationModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Candidate"
        message={`Are you sure you want to delete "${deleteModal.candidateName}"? This action cannot be undone and will permanently remove all candidate information.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  )
}

export default CandidateList
