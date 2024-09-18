import { useRef } from "react";
import style from "./Media.module.css";
import Slider from "react-slick";

const media = [
  {
    url: "https://bluntdao.org",
    imgActive: "/img/BluntDAO.png",
  },
  {
    url: "https://x.com/berabaddies",
    imgActive: "https://pbs.twimg.com/profile_images/1831950238950592513/n-rE7Yiy_400x400.jpg",
  },
  {
    url: "https://blackdragon.meme/",
    imgActive: "https://pbs.twimg.com/profile_images/1811761844186464256/qe5dWnmt_400x400.jpg",
  },


];

var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 694,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const Media = () => {
  const slider = useRef(null);

  return (
    <div className={`${style.container} reviews-section`}>
      <div className="section">
        <div className={style.header}>BluntOlympics brought to you by</div>
        <div className={style.subheader}>
         THE OGs validators, sponsors, technology that powers Proof of Sesh.
        </div>
        <div className={style.swiperWrapper}>
          <Slider ref={slider} {...settings}>
            {media.map((element) => (
              <div key={element.url} className={style.card}>
                <a
                  href={element.url}
                  target="_blank"
                  rel="noreferrer"
                  className={style.card}
                >
                  <img
                    src={element.imgActive}
                    alt=""
                    className={style.mediaImage}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Media;
