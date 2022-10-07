import axios from "axios";

export const postPrompt = async (prompt: string) => {
  const { data } = await axios.post("/api/predict", {
    version: "a9758cbfbd5f3c2094457d996681af52552901775aa2d6dd0b17fd15df959bef",
    input: {
      prompt: prompt,
    },
  });
  return data;
};

export const getImage = async (getUrl: string) => {
  const { data } = await axios.get("/api/predict", {
    params: { getUrl },
  });
  return data.output;
};
