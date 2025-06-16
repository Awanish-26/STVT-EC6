"use client"

import React from 'react'
import { useState } from "react"
import AuthPage from "./components/auth/AuthPage.jsx"
import Header from "./components/common/Header.jsx"
import CandidateList from "./components/candidates/CandidateList.jsx"
import CandidateForm from "./components/candidates/CandidateForm.jsx"
import CandidateDetail from "./components/candidates/CandidateDetail.jsx"
import LoadingSpinner from "./components/common/LoadingSpinner.jsx"
import ErrorMessage from "./components/common/ErrorMessage.jsx"
import Toast from "./components/common/Toast.jsx"
import { useTrainees } from "./hooks/useTrainees.js"
import { dropdownData } from "./data/dropdownData.js"
import "./index.css"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState("list")
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [toast, setToast] = useState({ isVisible: false, type: "success", message: "" })

  const {
    trainees: candidates,
    loading,
    error,
    createTrainee,
    updateTrainee,
    deleteTrainee,
    loadTrainees,
    clearError,
  } = useTrainees()

  const showToast = (type, message) => {
    setToast({ isVisible: true, type, message })
  }

  const hideToast = () => {
    setToast({ ...toast, isVisible: false })
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleAddCandidate = async (candidateData) => {
    const result = await createTrainee(candidateData)
    if (result.success) {
      setCurrentPage("list")
      showToast("success", "Candidate added successfully!")
      await loadTrainees()
    } else {
      showToast("error", result.error || "Failed to add candidate")
    }
  }

  const handleEditCandidate = async (candidateData) => {
    const result = await updateTrainee(selectedCandidate.id, candidateData)
    if (result.success) {
      setSelectedCandidate(result.data)
      setCurrentPage("list")
      showToast("success", "Candidate updated successfully!")
      await loadTrainees()
    } else {
      showToast("error", result.error || "Failed to update candidate")
    }
  }

  const handleDeleteCandidate = async (candidateId) => {
    const result = await deleteTrainee(candidateId)
    if (result.success) {
      showToast("success", "Candidate deleted successfully!")
    } else {
      showToast("error", result.error || "Failed to delete candidate")
    }
  }

  const handleViewDetail = (candidate) => {
    setSelectedCandidate(candidate)
    setCurrentPage("detail")
  }

  const handleEdit = (candidate) => {
    setSelectedCandidate(candidate)
    setCurrentPage("edit")
  }

  const handleBack = () => {
    setCurrentPage("list")
    setSelectedCandidate(null)
  }

  const handleAddNew = () => {
    setSelectedCandidate(null)
    setCurrentPage("add")
  }

  const handleRetry = () => {
    clearError()
    loadTrainees()
  }

  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header currentPage={currentPage} onBack={handleBack} onAddNew={handleAddNew} />

      <main className="container mx-auto px-6 py-8">
        {loading && currentPage === "list" && <LoadingSpinner size="lg" text="Loading candidates..." />}

        {error && currentPage === "list" && <ErrorMessage message={error} onRetry={handleRetry} />}

        {!loading && !error && currentPage === "list" && (
          <CandidateList
            candidates={candidates}
            onViewDetail={handleViewDetail}
            onEdit={handleEdit}
            onDelete={handleDeleteCandidate}
            dropdownData={dropdownData}
          />
        )}

        {currentPage === "add" && (
          <CandidateForm
            dropdownData={dropdownData}
            onSubmit={handleAddCandidate}
            onCancel={handleBack}
            isLoading={loading}
          />
        )}

        {currentPage === "edit" && selectedCandidate && (
          <CandidateForm
            candidate={selectedCandidate}
            dropdownData={dropdownData}
            onSubmit={handleEditCandidate}
            onCancel={handleBack}
            isEdit={true}
            isLoading={loading}
          />
        )}

        {currentPage === "detail" && selectedCandidate && (
          <CandidateDetail candidate={selectedCandidate} onEdit={handleEditCandidate} isLoading={loading} />
        )}
      </main>

      {/* Toast Notifications */}
      <Toast type={toast.type} message={toast.message} isVisible={toast.isVisible} onClose={hideToast} />
    </div>
  )
}

export default App
