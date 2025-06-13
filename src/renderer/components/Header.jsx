import React from 'react';
import { Edit, Eye, Plus } from 'lucide-react';

const Header = ({ isEditMode, onToggleMode, onNewCandidate }) => {
  return (
    <div className="flex justify-between items-center mb-6 bg-linear-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">CMS TESTING</h1>
      <div className="flex gap-2">
        <button
          onClick={onNewCandidate}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition-colors"
        >
          <Plus size={18} />
          New Candidate
        </button>
        <button
          onClick={onToggleMode}
          className="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors"
        >
          {isEditMode ? <Eye size={18} /> : <Edit size={18} />}
          {isEditMode ? 'Switch to View' : 'Switch to Edit'}
        </button>
      </div>
    </div>
  );
};

export default Header;
