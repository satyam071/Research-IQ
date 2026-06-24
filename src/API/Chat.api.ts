import axios from "axios";
import { BASE_URL } from "./BASE_URL";

// const BASE_URL = "https://server-facilitate-shoppers-quarterly.trycloudflare.com";

export const getAnswers = async (chats: string) => {
  const url = BASE_URL + "/chat";

  const payload = {
    mode:"explain",
    question: chats,
  };

  console.log("Sending:", payload);

  const answers = await axios.post(url, payload);

  console.log( answers.data);
  return answers.data;
};
