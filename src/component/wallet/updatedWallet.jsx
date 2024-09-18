import React from "react";
// Style
import style from "./wallet.module.css";

function ConnectWallet() {
  return (
    <>
      <div className={`${style.popupContainer}`}></div>
      <div className={style.container}>
        <a
          href="https://lu.ma/wocmc7oe"
          className={style.connect}
          target="_blank"
          rel="noreferrer"
        >
          Register
        </a>
      </div>
    </>
  );
}

export default ConnectWallet;
