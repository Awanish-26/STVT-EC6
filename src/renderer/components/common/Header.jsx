"use client"
import React from 'react'
import { ArrowLeft, Plus, Users, Settings } from "lucide-react"

const Header = ({ currentPage, onBack, onAddNew }) => {
  const getTitle = () => {
    switch (currentPage) {
      case "add":
        return "Add New Candidate"
      case "edit":
        return "Edit Candidate"
      case "detail":
        return "Candidate Details"
      default:
        return "Trainee Management"
    }
  }

  const getIcon = () => {
    switch (currentPage) {
      case "add":
        return <Plus className="h-6 w-6" />
      case "edit":
        return <Settings className="h-6 w-6" />
      case "detail":
        return <Users className="h-6 w-6" />
      default:
        return <Users className="h-6 w-6" />
    }
  }

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {currentPage !== "list" && (
              <button
                onClick={onBack}
                className="p-2 hover:bg-indigo-100 rounded-full transition-all duration-200 transform hover:scale-110 group"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
                {getIcon()}
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {getTitle()}
                </h1>
                <p className="text-sm text-gray-500">Manage your candidates efficiently</p>
              </div>
            </div>
          </div>

          {currentPage === "list" && (
            <button
              onClick={onAddNew}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 flex items-center space-x-2 transform hover:scale-105 shadow-lg"
            >
              <Plus className="h-5 w-5" />
              <span className="font-medium">Add Candidate</span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
