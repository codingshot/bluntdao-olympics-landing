import style from "./banner.module.css";
import { useEffect, useRef } from 'react';

const Banner = () => {
  const lumaScriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (!document.getElementById('luma-checkout')) {
      // Create and load the Luma checkout script
      const script = document.createElement('script');
      script.src = 'https://embed.lu.ma/checkout-button.js';
      script.id = 'luma-checkout';
      script.async = true;
      lumaScriptRef.current = script;

      script.onload = ( ) => {
        // Initialize Luma buttons after the script has loaded
        if (window.LumaCheckout) {
          window.LumaCheckout.load();
        }
      };

      document.body.appendChild(script);
    } else {
      // If the script is already loaded, just initialize the buttons
      if (window.LumaCheckout) {
        window.LumaCheckout.load();
      }
    }

    return () => {
      // Clean up script on component unmount
      if (lumaScriptRef.current) {
        document.body.removeChild(lumaScriptRef.current);
      }
    };
  }, []);

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
              href="https://lu.ma/event/evt-cDJmdU2FapCVNNY"
              className={`${style.discord} luma-checkout--button`}
              data-luma-action="checkout"
              data-luma-event-id="evt-cDJmdU2FapCVNNY"
            >
              Register
            </a>
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

        <img className={style.img2} src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/b9/8bafdde9-93bb-4c53-be90-95bb8383762f" alt="Blunt Olympics" />
      </div>
      <div className={style.separateRough}></div>
    </div>
  );
};

export default Banner;
