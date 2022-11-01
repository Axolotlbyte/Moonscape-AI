import axios from "axios";

export const postPrompt = async (prompt: string) => {
  const { data } = await axios.post("/api/predict", {
    prompt: prompt,
  });
  return data;
};

export const getImage = async (getUrl: string) => {
  const { data } = await axios.get("/api/predict", {
    params: { getUrl },
  });
  return data.output;
};
