import React from "react";
import style from "./BuiltWith.module.css";
import data from "./data";

const Sponsored = () => {
  return (
    <div className={style.container}>
      <div className={`${style.section} section`}>
        <div className={style.header}>Judges include</div>
        <div className={style.subheader}>
         Notable judges. 
        </div>
        <div className={style.TechWrapper}>
          {data.map((tech) => (
            <a key={tech.url} href={tech.url} target="_blank" rel="noreferrer">
              <img src={tech.img} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
