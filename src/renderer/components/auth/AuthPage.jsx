"use client"

import React from 'react'
import { useState } from "react"
import { Lock, Eye, EyeOff, Shield, User } from "lucide-react"

const AuthPage = ({ onLogin }) => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate async login
    setTimeout(() => {
      if (password === "admin123") {
        onLogin()
      } else {
        setError("Invalid password. Please use: admin123")
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-11">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Main login card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-100 animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access the Candidate Management System</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (error) setError("") // Clear error when user starts typing
                }}
                className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-all duration-200"
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-slideIn">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg font-medium"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing in...
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </div>
            )}
          </button>

          {/* Demo credentials info */}
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-blue-800">Demo Credentials</span>
              </div>
              <p className="text-sm font-mono font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-lg inline-block">
                admin123
              </p>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">Secure access to candidate management system</p>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
