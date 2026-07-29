import axios from "axios";
import { BASE_URL } from "./BASE_URL";

export const getAnswers = async (
  chats: string,
  mode?: string,
  paper_id:any
) => {
  const url = BASE_URL + "/chat";
  const id=localStorage.getItem("paper_id");

  const payload = {

    mode,
    question: chats,
    paper_id: id
  };

  console.log("Sending:", payload);

  const response = await axios.post(url, payload);

  console.log(response.data);

  return response.data;
};