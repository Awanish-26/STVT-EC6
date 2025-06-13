import { useState } from 'react';
import { INITIAL_CANDIDATE_STATE } from '../constants/FormContants.js';

export const useCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [currentCandidate, setCurrentCandidate] = useState(INITIAL_CANDIDATE_STATE);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (field, value) => {
    setCurrentCandidate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!currentCandidate.name) {
      alert('Please enter candidate name');
      return;
    }

    const existingIndex = candidates.findIndex(
      c => c.name === currentCandidate.name && c.email === currentCandidate.email
    );

    if (existingIndex >= 0) {
      const updatedCandidates = [...candidates];
      updatedCandidates[existingIndex] = { ...currentCandidate };
      setCandidates(updatedCandidates);
    } else {
      setCandidates([...candidates, { ...currentCandidate }]);
    }

    setIsEditMode(false);
  };

  const handleEdit = (candidate) => {
    setCurrentCandidate(candidate);
    setIsEditMode(true);
  };

  const handleDelete = (index) => {
    const updatedCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(updatedCandidates);
  };

  const handleNewCandidate = () => {
    setCurrentCandidate(INITIAL_CANDIDATE_STATE);
    setIsEditMode(true);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return {
    candidates,
    currentCandidate,
    isEditMode,
    handleInputChange,
    handleSave,
    handleEdit,
    handleDelete,
    handleNewCandidate,
    toggleEditMode
  };
};
