import React from 'react';
import {TbArrowsShuffle} from "react-icons/tb";
import {Title} from "../tools/title.jsx";
import {useProvider} from "../provider/provider.jsx";

export const Seed = () => {

    const {seed, setSeed} = useProvider().get;
    const changeSeed = (e) => {
        setSeed(e.target.value);
    }

    const generateRandomSeed = () => {
        const randomSeed = Math.floor(Math.random() * 1000000) + 1;
        setSeed(randomSeed);
    }

  return (
    <div className={`seed-box`}>
        <Title name={`Seed:`}/>
        <div className={`seed-container`}>
            <input id={`seed`}
                   className={`seed-input`}
                   value={seed}
                   onChange={changeSeed}
                   placeholder={0}
            />
        </div>
        <button className={`seed-button`} onClick={generateRandomSeed}>
            <TbArrowsShuffle/>
        </button>
    </div>
  );
}
