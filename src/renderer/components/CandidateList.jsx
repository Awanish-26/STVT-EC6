import React from 'react';
import { User } from 'lucide-react';
import CandidateCard from './CandidateCard.jsx';

const CandidateList = ({ candidates, onEdit, onDelete, onNewCandidate }) => {
  if (candidates.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <User size={48} className="text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-600 mb-2">
          No candidates registered yet
        </h3>
        <p className="text-gray-500 mb-4">
          Start by adding your first candidate
        </p>
        <button
          onClick={onNewCandidate}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add First Candidate
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="p-4 bg-gray-50 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Registered Candidates ({candidates.length})
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {candidates.map((candidate, index) => (
          <CandidateCard
            key={index}
            candidate={candidate}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;