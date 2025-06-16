"use client"

import { useState, useEffect } from "react"
import { traineeAPI } from "../services/api.js"

export const useTrainees = () => {
  const [trainees, setTrainees] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load all trainees
  const loadTrainees = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await traineeAPI.getTrainees()
      if (response.success) {
        setTrainees(response.data)
      } else {
        setError(response.error)
      }
    } catch (err) {
      setError("Failed to load trainees")
    } finally {
      setLoading(false)
    }
  }

  // Create new trainee
  const createTrainee = async (data) => {
    setLoading(true)
    setError(null)

    try {
      const response = await traineeAPI.createTrainee(data)
      if (response.success) {
        await loadTrainees()
        return { success: true, data: response.data }
      } else {
        setError(response.error)
        return { success: false, error: response.error }
      }
    } catch (err) {
      const errorMsg = "Failed to create trainee"
      setError(errorMsg)
      return { success: false, error: errorMsg }
    } finally {
      setLoading(false)
    }
  }

  // Update trainee
  const updateTrainee = async (id, data) => {
    setLoading(true)
    setError(null)

    try {
      const response = await traineeAPI.updateTrainee(id, data)
      if (response.success) {
        setTrainees((prev) => prev.map((trainee) => (trainee.id === id ? response.data : trainee)))
        return { success: true, data: response.data }
      } else {
        setError(response.error)
        return { success: false, error: response.error }
      }
    } catch (err) {
      const errorMsg = "Failed to update trainee"
      setError(errorMsg)
      return { success: false, error: errorMsg }
    } finally {
      setLoading(false)
    }
  }

  // Delete trainee
  const deleteTrainee = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await traineeAPI.deleteTrainee(id)
      if (response.success) {
        setTrainees((prev) => prev.filter((trainee) => trainee.id !== id))
        return { success: true }
      } else {
        setError(response.error)
        return { success: false, error: response.error }
      }
    } catch (err) {
      const errorMsg = "Failed to delete trainee"
      setError(errorMsg)
      return { success: false, error: errorMsg }
    } finally {
      setLoading(false)
    }
  }

  // Get trainee by ID
  const getTraineeById = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await traineeAPI.getTraineeById(id)
      if (response.success) {
        return { success: true, data: response.data }
      } else {
        setError(response.error)
        return { success: false, error: response.error }
      }
    } catch (err) {
      const errorMsg = "Failed to fetch trainee"
      setError(errorMsg)
      return { success: false, error: errorMsg }
    } finally {
      setLoading(false)
    }
  }

  // Load trainees on mount
  useEffect(() => {
    const fetchTrainees = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await traineeAPI.getTrainees()
        if (response.success) {
          setTrainees(response.data)
        } else {
          setError(response.error)
        }
      } catch (err) {
        setError("Failed to load trainees")
      } finally {
        setLoading(false)
      }
    }

    fetchTrainees()
  }, [])

  return {
    trainees,
    loading,
    error,
    loadTrainees,
    createTrainee,
    updateTrainee,
    deleteTrainee,
    getTraineeById,
    clearError: () => setError(null),
  }
}
