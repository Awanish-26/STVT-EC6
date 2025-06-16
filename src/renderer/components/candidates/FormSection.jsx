"use client"
import React from 'react'

const FormSection = ({ title, icon, color, children }) => (
  <div className="space-y-6 animate-slideIn">
    <div className="flex items-center space-x-4 mb-6">
      <div className={`p-3 bg-gradient-to-r ${color} rounded-2xl text-white text-xl shadow-lg`}>{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="h-1 w-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mt-1"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white/40 rounded-2xl border border-white/30">
      {children}
    </div>
  </div>
)

export default FormSection
