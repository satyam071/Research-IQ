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

    return (
        <div>
            {isUploaded ?
                <ResponsePage />




                : <UploadSec />}


        </div>
    );
};

export default ResearchPage;