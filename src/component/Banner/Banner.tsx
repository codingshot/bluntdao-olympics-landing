import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.container}>
      <div className={`${style.section} section`}>
        <div className={style.description}>
          <div className={style.header}>
                <div>Blunt Olympics</div>
   
          </div>
          <div className={style.content}>
            The Biggest Cannabis Competition in 🇹🇭 Thailand brought to you by Blunt DAO.
          </div>

          <div className={style.join}>
            <a
              className={style.discord}
              href="https://lu.ma/wocmc7oe"
              rel="noopener noreferrer"
              target="_blank"
            >
              Register
            </a>
            {/* <div className={style.discord}>JOIN DISCORD</div> */}

            {/* <a className={style.volunteer} href="https://doc.clickup.com/d/xhfvf-20/bluntifesto/xhfvf-240/volunteer-interest-form" rel="noopener noreferrer" target="_blank">VOLUNTEER</a> */}
            <a
              className={style.volunteer}
              href="https://t.me/+r61CkOBHLq03YTYx"
              rel="noopener noreferrer"
              target="_blank"
            >
              Train
            </a>
          </div>
        </div>

        {/* <img className={style.img2} src="/img/BluntAnimated.gif" alt="BluntDAO animated" /> */}
        <img className={style.img2} src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/b9/8bafdde9-93bb-4c53-be90-95bb8383762f" alt="Blunt Olympics" />
      </div>
      {/* <div className={`${style.section} section`}></div> */}
      <div className={style.separateRough}></div>
    </div>
  );
};

export default Banner;
