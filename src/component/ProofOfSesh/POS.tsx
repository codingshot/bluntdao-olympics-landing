import style from "./POS.module.css";

const POS = () => {
  const items = [
    {
      title: "Blunt + Joint Rolling Competition",
      description:
        "Who can roll the best. Factors include speed, smokability, and style.",
      img: "/img/roll-up.png",
    },
    {
      title: "Tiny Viking Tap Out",
      description: "Continous smoking competitions. Last one standing wins.",
      img: "/img/burn.png",
    },
    {
      title: "Bera-Baddies Bake Off",
      description:
        "Who can bake the best edibles. Culinary esquisitness at its finest.",
      img: "/img/init.png",
    },
    {
      title: "Eye Ball Bagging Competition",
      description:
        "This one is for the trappers. Bag bud without a scale. Accuracy & speed is key despite the product you are working with.",
      img: "/img/eyeball.png",
    },
    {
      title: "DIY Bong Crafting",
      description:
        "Based on traditional Thai bamboo-bong aka Bambong. Craftsmanship at its finest. Challenge to craft your own bong",
      img: "/img/bambong.png",
    },
    {
      title: "Tree vs Tree BeraChain Hoops",
      description: `3 vs 3 basketball aka "Smackedskeball competition w/ Berachain.`,
      img: "/img/hoops.png",
    },
    {
      title: "Any Conditions Wild Card",
      description: `Prepare for any conditions. For the OGs who really be out in the street.`,
      img: "/img/wildcard.png",
    },
  ];

  return (
    <div className={style.container}>
      <div className={`${style.section} section`} id="pos">
        <div className={style.header}>The Olympics Games</div>
        <div className={style.subheader}>
          Olympians around the world will be competing in these games (more TBA) representing their country on the global blunt stage. 
        </div>

        <div className={style.itemContainer}>
          {items.map((item, idx) => {
            return (
              <div key={item.title} className={style.item}>
                <div className={style.img}>
                  <img src={item.img} alt={item.title} className={style.responsiveImage} />
                </div>
                <div className={style.heading}>
                  <div className={style.title}>{item.title}</div>
                </div>
                <div className={style.description}>{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.separateRough}></div>
    </div>
  );
};

export default POS;
