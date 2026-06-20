import axios from "axios";

const BASE_URL = "https://creamlike-gracious-salvage.ngrok-free.dev";

export const getAnswers = async (chats: string) => {
  const url = BASE_URL + "/chat";

  const payload = {
    question: chats,
  };

  console.log("Sending:", payload);

  const answers = await axios.post(url, payload);

  return answers.data;
};
