import axios from 'axios';

const BASE_URL = 'base_url';

export const getCalendarTier = async ({ start, end }) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/calendar`, {
      params: {
        start,
        end,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
