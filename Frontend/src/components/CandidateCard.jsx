import React from 'react';
import { User, Edit, Trash2 } from 'lucide-react';

const CandidateCard = ({ candidate, index, onEdit, onDelete }) => {
  return (
    <div className="p-4 hover:bg-gray-50">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User size={20} className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {candidate.name || 'Unnamed Candidate'}
            </h3>
            <p className="text-sm text-gray-600">
              {candidate.designation} • {candidate.station}
            </p>
            <p className="text-sm text-gray-500">
              {candidate.email} • {candidate.mobileNo}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(candidate)}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-colors"
            title="Edit"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(index)}
            className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <span className="font-medium text-gray-600">Qualification:</span>
          <p className="text-gray-800">
            {candidate.educationalQualification || '-'}
          </p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Branch:</span>
          <p className="text-gray-800">{candidate.branch || '-'}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Experience:</span>
          <p className="text-gray-800">
            {candidate.pastExperience ? 'Yes' : 'No'}
          </p>
        </div>
        <div>
          <span className="font-medium text-gray-600">DOJ:</span>
          <p className="text-gray-800">{candidate.doj || '-'}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;