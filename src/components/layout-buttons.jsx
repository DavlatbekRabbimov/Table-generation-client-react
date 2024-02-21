import React from 'react';
import {useProvider} from "../provider/provider.jsx";
import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";

export const LayoutButtons = () => {

    const {setRange} = useProvider().get;
  const increaseRange = () => {
    setRange(prevRange => prevRange + 10);
  };

  const decreaseRange = () => {
    setRange(prevState => prevState - 10);
  }

  return (
      <div className={`button-container`}>
        <button className={`button`}
                onClick={decreaseRange}>
            <FaLongArrowAltLeft className={`text-[20px] mt-1.5`} />
        </button>
          <span className={`text-[18px] font-body mt-1`}> 10 rows</span>
        <button className={`button`}
                onClick={increaseRange}>
            <FaLongArrowAltRight className={`text-[20px] mt-1.5`} />
        </button>
      </div>
  );
}
