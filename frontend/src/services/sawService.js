import api from "./api";

export const calculateSAW = async (
  weights
) => {
  const response = await api.post(
    "/saw",
    weights
  );

  return response.data;
};