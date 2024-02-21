import React from 'react';
import {Title} from "../tools/title.jsx";
import {useProvider} from "../provider/provider.jsx";

export const Error = () => {

    const {errors, setErrors} = useProvider().get;
    const changeError = (e) => {
        setErrors(e.target.value)
    }

    return (
        <div className={`flex flex-row justify-center items-center space-x-4 p-4`}>
            <Title name={`Error:`}/>
            <input id={`error`} type={`range`} min={0} max={10}
                   value={errors}
                   onChange={changeError}
                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className={`border-[1px] border-amber-50`}>
                <input id={`error`} min={0} max={1000}
                       value={errors}
                       onChange={changeError}
                       className={`w-[75px] text-center p-1 rounded-[5px] bg-transparent ring-0 outline-none`}
                       placeholder={0}
                />
            </div>

        </div>
    );
}
