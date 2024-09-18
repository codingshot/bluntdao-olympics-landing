import React, { useState } from "react";
import style from "./NewsLetter.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import useAnalyticsEventTracker from "../../utils/useAnalyticsEventTracker";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [seen, setSeen] = useState(false);

  const gaEventTracker = useAnalyticsEventTracker("Contact US");

  const url =
    "https://subscribe.bluntdao.org";

  return (
    <div className={style.container}>
      <div className="section">
        <div className={style.newsLetterWrapper}>
          <img src="/img/contact-us-graph.png" alt="" />

          <div>
            <h2 className={style.header}>
            Join our Mailing List{" "}
            </h2>
            <h2 className={style.subheader}> digital carepackages of love
            </h2>
            <a
              className={style.btn}
              href={url}
              target="_blank"
              rel="noreferrer"
              onClick={() => gaEventTracker("click", "contact-us")}
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

// url={url}
// <MailchimpSubscribe
// render={({ subscribe, status, message }) => (
//   <>
//
//     {status === "sending" && (
//       <div style={{ color: "blue" }}>sending...</div>
//     )}
//     {status === "error" && (
//       <div style={{ color: "blue" }}>{message}</div>
//     )}
//     {status === "success" && (
//       <div style={{ color: "green" }}>Subscribed !</div>
//     )}
//   </>
// )}
// />
// onSubmit={(event) => {
//   event.preventDefault();
//   subscribe({ EMAIL: email });
//   setEmail("");
//   setSeen(true);
// }}
// >
// <input
//   type="text"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
