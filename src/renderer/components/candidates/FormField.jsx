"use client"
import React from 'react'
import { useState } from "react"
import { Eye, EyeOff, Calendar, ChevronDown } from "lucide-react"

const FormField = ({ 
  label, 
  field, 
  type = "select", 
  options = [], 
  required = false, 
  formData = {}, 
  onChange,
  error // Add error prop
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const value = formData[field] || ""

  const handleChange = (newValue) => {
    if (onChange && typeof onChange === "function") {
      onChange(field, newValue)
    }
  }

  const baseInputClasses = `
    w-full px-4 py-3 bg-white border-2 rounded-xl 
    transition-all duration-200 ease-in-out placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    ${isFocused ? "border-blue-400 bg-white" : "border-gray-300"}
    ${value ? "border-gray-400" : ""}
  `

  return (
    <div className="space-y-2">
      <label
        className={`block text-sm font-medium transition-colors duration-200 ${
          isFocused ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative group">
        {type === "select" ? (
          <div className="relative">
            <select
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`${baseInputClasses} appearance-none cursor-pointer pr-12`}
              required={required}
            >
              <option value="" className="text-gray-400">
                Choose {label}
              </option>
              {Array.isArray(options) &&
                options.map((option) => (
                  <option key={option} value={option} className="text-gray-700">
                    {option}
                  </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <ChevronDown
                className={`w-5 h-5 transition-colors duration-200 ${isFocused ? "text-blue-500" : "text-gray-400"}`}
              />
            </div>
          </div>
        ) : type === "date" ? (
          <div className="relative">
            <input
              type="date"
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`${baseInputClasses} pr-12`}
              required={required}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
              <Calendar
                className={`w-5 h-5 transition-colors duration-200 ${isFocused ? "text-blue-500" : "text-gray-400"}`}
              />
            </div>
          </div>
        ) : type === "password" ? (
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`${baseInputClasses} pr-12`}
              placeholder={`Enter ${label.toLowerCase()}`}
              required={required}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-blue-500 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        ) : type === "textarea" ? (
          <textarea
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4}
            className={`${baseInputClasses} resize-none`}
            placeholder={`Enter ${label.toLowerCase()}`}
            required={required}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={baseInputClasses}
            placeholder={`Enter ${label.toLowerCase()}`}
            required={required}
          />
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}

export default FormField
