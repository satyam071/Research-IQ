import axios from "axios";

const BASE_URL = "https://creamlike-gracious-salvage.ngrok-free.dev";

export const sendPdf = async (file: File) => {
    const URL = BASE_URL + "/upload-paper";

    const formData = new FormData();
    formData.append("file", file);

    console.log("This is the file:", file);
    console.log("This is the URL:", URL);

        const response = await axios.post(
            URL,
            formData,
        );

        localStorage.setItem("paper_id", response.data.paper_id);

        return response.data;
};