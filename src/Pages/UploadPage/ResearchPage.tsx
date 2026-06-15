import React, { useContext } from "react";
import UploadSec from "./UploadSec";
import { UploadContextData } from "../../Context/UploadContext";
import ResponsePage from "./ResponsePage";


interface Props {

}

const ResearchPage: React.FC<Props> = (props) => {
    const { isUploaded, setIsUploaded } = useContext(UploadContextData);

    return (
        <div>
            {isUploaded ?
                <ResponsePage />




                : <UploadSec />}


        </div>
    );
};

export default ResearchPage;