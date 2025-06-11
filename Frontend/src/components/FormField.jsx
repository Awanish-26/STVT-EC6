import React from 'react';

const FormField = ({ 
  label, 
  field, 
  value, 
  type = 'text', 
  options = [], 
  isEditMode, 
  onChange 
}) => {
  if (!isEditMode) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="p-2 bg-gray-50 border rounded-md min-h-[38px] flex items-center">
          {value || '-'}
        </div>
      </div>
    );
  }

  const handleChange = (newValue) => {
    onChange(field, newValue);
  };

  switch (type) {
    case 'select':
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <select
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    
    case 'radio':
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
          <div className="flex gap-4">
            {options.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name={field}
                  value={option}
                  checked={value === option}
                  onChange={(e) => handleChange(e.target.value)}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      );
    
    case 'textarea':
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <textarea
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      );
    
    case 'date':
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <input
            type="date"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      );
    
    default:
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <input
            type={type}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      );
  }
};

export default FormField;