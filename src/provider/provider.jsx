import React, {createContext, useContext, useState} from "react";

const Context = createContext();
export const Provider = ({children}) => {

    const serverUrl = 'http://localhost:5003';

    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState(0);
    const [seed, setSeed] = useState(0);
    const [region, setRegion] = useState('en');
    const [page, setPage] = useState(0);
    const [position, setPosition] = useState("");
    const [positions, setPositions] = useState([]);
    const [range, setRange] = useState(20);

    const get = {
        serverUrl, data, setData, region, setRegion, username, setUsername,
        position, setPosition, positions, setPositions, page, setPage,
        email, setEmail, errors, setErrors,
        range, setRange, seed, setSeed,
    }

    return (
        <Context.Provider value={{get}}>
            {children}
        </Context.Provider>
    )
}

export function useProvider() {
    return useContext(Context);
}
