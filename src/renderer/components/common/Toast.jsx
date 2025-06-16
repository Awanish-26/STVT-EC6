"use client"
import React from 'react'
import { useEffect } from "react"
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react"

const Toast = ({ type = "success", message, isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-600" />,
    error: <XCircle className="h-5 w-5 text-red-600" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-600" />,
  }

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    warning: "bg-yellow-50 border-yellow-200",
  }

  return (
    <div className="fixed top-4 right-4 z-[10000] animate-fadeIn">
      <div className={`flex items-center space-x-3 p-4 rounded-xl border ${bgColors[type]} shadow-lg max-w-md`}>
        {icons[type]}
        <p className="text-gray-800 font-medium flex-1">{message}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default Toast
