import axios from 'axios';

const BASE_URL = 'base_url';

export const getCalorieAndScore = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/kcal`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
