import React from 'react';
import {Title} from "../tools/title.jsx";
import {useProvider} from "../provider/provider.jsx";

export const Region = () => {

    const {region, setRegion} = useProvider().get;
    const changeRegion = (e) => {
        setRegion(e.target.value)
    }

    return (
        <div>
            <form className="region-selector-form">
                <Title name={`Region:`}/>
                <select id="region"
                        className="region-selector"
                        value={region}
                        onChange={changeRegion}
                >
                    <option value="en">United States</option>
                    <option value="ru">Russia</option>
                    <option value="es">Spain</option>
                </select>
            </form>
        </div>
    );
}
