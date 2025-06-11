import React from 'react';
import { Save } from 'lucide-react';
import FormField from './FormField';
import { FORM_FIELDS, FORM_OPTIONS } from '../constants/FormContants';

const CandidateForm = ({ 
  candidate, 
  isEditMode, 
  onChange, 
  onSave 
}) => {
  if (!isEditMode && !candidate.name) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {isEditMode ? 'Edit Candidate Information' : 'Candidate Information'}
        </h2>
        {isEditMode && (
          <button
            onClick={onSave}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Save size={18} />
            Save
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Working Under Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700 border-b pb-2">
            Working Under Details
          </h3>
          
          {FORM_FIELDS.workingDetails.map((field) => (
            <FormField
              key={field.name}
              label={field.label}
              field={field.name}
              value={candidate[field.name] || ''}
              type={field.type}
              options={FORM_OPTIONS[field.name] || []}
              isEditMode={isEditMode}
              onChange={onChange}
            />
          ))}
        </div>

        {/* Right Column - Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700 border-b pb-2">
            Personal Details
          </h3>
          
          {FORM_FIELDS.personalDetails.map((field) => (
            <FormField
              key={field.name}
              label={field.label}
              field={field.name}
              value={candidate[field.name] || ''}
              type={field.type}
              options={FORM_OPTIONS[field.name] || []}
              isEditMode={isEditMode}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
