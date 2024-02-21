import axios from "axios";
import {useProvider} from "../provider/provider.jsx";
import React, {useEffect} from "react";
import {Region} from "../components/region.jsx";
import {Error} from "../components/error.jsx";
import {Seed} from "../components/seed.jsx";
import {Export} from "../components/export.jsx";
import {LayoutButtons} from "../components/layout-buttons.jsx";

export const GenerationTable = () => {

    const {
        data, setData, errors, seed, serverUrl, page, region, range
    } = useProvider().get;

    useEffect(() => {
        fetchData();
    }, [seed, errors, region, range]);

    const fetchData = () => {
        axios.get(`${serverUrl}/generate?seed=${seed}&errors=${errors}&region=${region}&page=${page}&range=${range}`)
            .then(res => {
                setData(res.data);
            }).catch(err => {
            alert(err);
        });
    };


    return (
        <div className="box">
            <div className="first-level-box">
                    <div className="table-box">
                        <div className="table-header-container">
                            <table className="table">
                                <thead>
                                <tr className="bg-slate-900">
                                    <th className="table-header-id">ID</th>
                                    <th className="table-header"><Region/></th>
                                    <th className="table-header"><Error/></th>
                                    <th className="table-header"><Seed/></th>
                                    <th className="table-header"><Export/></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table-body-container">
                            <table className="table">
                                <tbody className="table-body">
                                {data.length > 0 ? (
                                    data.map((item) => (
                                        <tr className="table-row" key={item.id}>
                                            <td className={`table-body-id`}>{item.id}</td>
                                            <td className={`table-data`}>{item.randomId}</td>
                                            <td className={`table-data`}>{item.name}</td>
                                            <td className={`table-data`}>{item.address}</td>
                                            <td className={`table-data`}>{item.phone}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="table-row">
                                        <td colSpan={5} className="p-1">Not data</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <LayoutButtons/>
                    </div>
                </div>
        </div>
    );
};
