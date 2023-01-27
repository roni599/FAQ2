import React, { useState } from "react";
import Data from "../Components/Data";
import Faqs2 from "../Components/Faqs2";
import style from "../Css/One.module.css";

const FAQS = () => {
  const [currentId, setCurrentId] = useState();

  const handler = (id) => {
    setCurrentId(id);
  };

  return (
    <div className={style.main}>
      {Data.map((data) => (
        <Faqs2
          key={data.id}
          toggleHandler={handler}
          Title={data.Title}
          id={data.id}
          Answer={data.id === currentId ? data.Answer : ""}
        />
      ))}
    </div>
  );
};

export default FAQS;