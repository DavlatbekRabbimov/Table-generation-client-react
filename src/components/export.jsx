import React from 'react';
import {FaFileExport} from "react-icons/fa";
import {Title} from "../tools/title.jsx";
import axios from "axios";
import {useProvider} from "../provider/provider.jsx";

export const Export = () => {

    const {serverUrl, data} = useProvider().get;

    const exportToCsv = () => {
        axios({
            url: `${serverUrl}/export`,
            method: 'POST',
            data: data,
            responseType: 'blob',
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'data.csv');
                document.body.appendChild(link);
                link.click();
            });
    }

    return (
        <div className={`export-button-container`}>
            <button onClick={exportToCsv}
                className={`export-button`}>
                <Title name={`Export`}/>
                <FaFileExport/>
            </button>
        </div>
    );
}
