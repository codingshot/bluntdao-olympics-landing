import React, { useState } from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import classes from "./FAQ.module.css";
import FQACard from "./FAQCard";
import Media from "../Media/Media";
import useAnalyticsEventTracker from "../../utils/useAnalyticsEventTracker";

const FQA = () => {
  const [state, setState] = useState({
    dropdown: "",
  });
  const { dropdown } = state;

  const gaEventTracker = useAnalyticsEventTracker("Join Discord");

  const handleSetState = (payload: any) => {
    setState((states) => ({ ...states, ...payload }));
  };

  const FAQS = [
    {
      id: 1,
      question: "What if i don't want to compete??",
      answer:
        "if you aint about that stoner life and dont partake u not welcome. Partake, compete, sponsor, judge, do something.",
    },
{
      id: 2,
      question: "How do i sign up?",
      answer:
        "Luma choose your role",
    },
    {
      id: 3,
      question: "How do I join the BluntDAO?",
      answer:
        "You join the BluntDAO by officially sesh'ing with DAO member via Proof of Sesh (IRL SESH) We are building a dApp for Proof of Sesh (Coming soon)",
    },
    {
      id: 4,
      question: "How do i sponsor?",
      answer:
        "Sponsor with money, tech integration, activations, bud, media support."
    },

     
    {
      id: 7,
      question: "Where do yall scheme?",
      answer: (
        <a href="https://bluntdao.org/telegram" target="_blank" rel="noreferrer">
          On Telegram
        </a>
      ),
    },

  ];

  return (
    <div className={`${classes.container} ${classes.extraPadding}`}>
      <div className={`${classes.section}`}>
        <div className={classes.heading}>Frequently Asked Questions</div>
        {/* <div className={classes.subHeading}>
          Browse through most questions raise by users
        </div> */}
        <div className={`${classes.FQAs} section`}>
          {FAQS.map((FAQ, index) => (
            <FQACard
              key={FAQ.id}
              FAQ={FAQ}
              id={index}
              dropdown={dropdown}
              handleSetState={handleSetState}
            />
          ))}
        </div>
        {/* <NewsLetter /> */}

        <div className={`${classes.joinDiscord} section`}>
          <div className={classes.head1}>
            Want to Join the IRL movement onboarding the next million users to
            Web3?
          </div>
          <div className={classes.head2}>Join our Telegram</div>
          <a
            href="https://t.me/+yQSuu5Vl6_k3YWRh"
            target="_blank"
            rel="noreferrer"
            onClick={() => gaEventTracker("click", "join-discord")}
          >
            {" "}
            <div className={classes.discord}>Join</div>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FQA;
