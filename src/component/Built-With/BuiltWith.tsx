import React from "react";
import style from "./BuiltWith.module.css";
import data from "./data";

const Sponsored = () => {
  return (
    <div className={style.container}>
      <div className={`${style.section} section`}>
        <div className={style.header}>Judges include</div>
        <div className={style.subheader}>
          Notable judges who will test ur blunts.
        </div>
        <div className={style.TechWrapper}>
          {data.map((tech) => (
            <div key={tech.url} className={style.techItem}>
              <a href={tech.url} target="_blank" rel="noreferrer">
                <div className={style.techName}>{tech.name}</div>
                <img src={tech.img} alt={tech.name} />
                <div className={`${style.techInfo} ${style.blackText}`}>
                  <span className={style.techTitle}>{tech.title}</span>
                  {tech.company && (
                    <>
                      <span className={style.separator}>,&nbsp;</span>
                      <span className={style.techOrg}>{tech.company}</span>
                    </>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
