import React from 'react';

const DetailField = ({ label, value }) => (
  <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50 px-2 rounded-lg transition-colors duration-200">
    <dt className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">{label}</dt>
    <dd className="text-sm text-gray-900 font-medium text-right max-w-xs">
      {value || <span className="text-gray-400 italic">Not specified</span>}
    </dd>
  </div>
)

export default DetailField
