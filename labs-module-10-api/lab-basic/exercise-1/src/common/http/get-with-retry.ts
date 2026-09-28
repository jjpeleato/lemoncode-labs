import axios, { AxiosRequestConfig } from 'axios';

const RETRY_DELAY_MS = 1000;

export const getWithRetry = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const { data } = await axios.get<T>(url, config);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      const { data } = await axios.get<T>(url, config);
      return data;
    }
    throw error;
  }
};
