export const traineeAPI = {
  getTrainees: async () => {
    try {
      const data = await window.api.getTrainees();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  createTrainee: async (traineeData) => {
    try {
      const data = await window.api.createTrainee(traineeData);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  updateTrainee: async (id, traineeData) => {
    try {
      const data = await window.api.updateTrainee(id, traineeData);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  deleteTrainee: async (id) => {
    try {
      const data = await window.api.deleteTrainee(id);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getTraineeById: async (id) => {
    try {
      const data = await window.api.getTraineeById(id);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};
