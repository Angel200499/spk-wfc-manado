import api from "./api";

export const getAllCafe = async () => {
  const response = await api.get(
    "/api/cafes"
  );

  return response.data;
};