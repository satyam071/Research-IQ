import axios from "axios";
import { BASE_URL } from "./BASE_URL";






export const getSummary = async () => {
    
    console.log("summery is running")
    const paperId = localStorage.getItem("paper_id");
    
    if (!paperId) {
        throw new Error("paper_id not found");
    }
    
    const URL = `${BASE_URL}/paper/${paperId}/summary/`;
    console.log(paperId)

    try {
        const response = await axios.get(URL);

        console.log("to get summery url: ",URL);

        return response.data;
    } catch (error) {
        console.error(URL);
        throw error;
    }
};