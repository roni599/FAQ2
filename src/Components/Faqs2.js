import React from "react";
import style from "../Css/Two.module.css";

const Faqs2 = (props) => {
  const { Title, Answer, toggleHandler, id } = props;
  console.log(props);
  return (
    <div className={style.main}>
      <div className={style.two}>
        <h3>{Title}</h3>
        <button className={style.btn} onClick={() => toggleHandler(id)}>
          {Answer ? "-" : "+"}
        </button>
      </div>
      {Answer && <p>{Answer}</p>}
    </div>
  );
};

export default Faqs2;