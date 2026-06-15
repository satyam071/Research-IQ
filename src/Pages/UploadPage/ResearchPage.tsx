import React, { useContext } from "react";
import UploadSec from "./UploadSec";
import { UploadContextData } from "../../Context/UploadContext";
import ExtractedData from "./ExtractedData";


interface Props {

}

const ResearchPage: React.FC<Props> = (props) => {
    const { isUploaded, setIsUploaded } = useContext(UploadContextData);

    return (
        <div>
            {isUploaded ?
                <ExtractedData/>




                : <UploadSec />}


        </div>
    );
};

export default ResearchPage;