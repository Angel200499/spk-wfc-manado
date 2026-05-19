import api from "./api";

export const getAllCafe = async () => {
  const response = await api.get("/cafes");

  return response.data;
};