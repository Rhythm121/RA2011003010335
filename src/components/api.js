// api.js

const API_BASE_URL = 'http://20.244.56.144/train/auth/';

export const fetchTrainSchedule = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/train/trains`);
    if (!response.ok) {
      throw new Error('Failed to fetch train schedule');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('An error occurred while fetching train schedule');
  }
};

export const fetchSingleTrainDetails = async (trainNumber) => {
  try {
    const response = await fetch(`${API_BASE_URL}/train/${trainNumber}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch details for train ${trainNumber}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`An error occurred while fetching details for train ${trainNumber}`);
  }
};
