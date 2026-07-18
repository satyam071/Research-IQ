import axios from "axios";
import { BASE_URL } from "./BASE_URL";

export const getAnswers = async (
  chats: string,
  mode?: string
) => {
  const url = BASE_URL + "/chat";

  const payload = {
    mode,
    question: chats,
  };

  console.log("Sending:", payload);

  const response = await axios.post(url, payload);

  console.log(response.data);

  return response.data;
};