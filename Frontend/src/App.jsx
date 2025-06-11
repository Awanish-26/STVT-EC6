import React from 'react';
import Header from './components/Header';
import CandidateForm from './components/CandidateForm';
import CandidateList from './components/CandidateList';
import { useCandidates } from './hooks/useCandiates';
import './index.css';

function App() {
  const {
    candidates,
    currentCandidate,
    isEditMode,
    handleInputChange,
    handleSave,
    handleEdit,
    handleDelete,
    handleNewCandidate,
    toggleEditMode
  } = useCandidates();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      <Header
        isEditMode={isEditMode}
        onToggleMode={toggleEditMode}
        onNewCandidate={handleNewCandidate}
      />

      <CandidateForm
        candidate={currentCandidate}
        isEditMode={isEditMode}
        onChange={handleInputChange}
        onSave={handleSave}
      />

      <CandidateList
        candidates={candidates}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onNewCandidate={handleNewCandidate}
      />
    </div>
  );
}

export default App;