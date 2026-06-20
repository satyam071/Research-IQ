import React, { useContext, useEffect } from "react";
import UploadSec from "./UploadSec";
import { UploadContextData } from "../../Context/UploadContext";
import ResponsePage from "./ResponsePage";


interface Props {

}

const ResearchPage: React.FC<Props> = (props) => {

    useEffect(() => {
        localStorage.removeItem("paper_id");
    }, []);
    const { isUploaded } = useContext(UploadContextData);

    console.log("Research page content is running!")

    return (
        <div>
            {isUploaded ?
                <ResponsePage />




                : <UploadSec />}


        </div>
    );
};

export default ResearchPage;