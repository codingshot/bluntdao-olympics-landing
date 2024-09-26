import style from "./navbar.module.css";
import { useState } from "react";
import { ExternalLink } from "react-external-link";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import ConnectWallet from "../wallet/updatedWallet";
import useAnalyticsEventTracker from "../../utils/useAnalyticsEventTracker";

const Navbar = () => {
  const [state, setState] = useState({
    dropdown: false,
  });
  const { dropdown } = state;
  const gaEventTracker = useAnalyticsEventTracker("Navbar Links");
  const handleSetState = (payload: { dropdown: boolean }) => {
    setState((state) => ({ ...state, ...payload }));
  };

  return (
    <div className={style.container}>
      <Link
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-80}
        duration={300}
        isDynamic={true}
        to="banner"
        onClick={() => handleSetState({ dropdown: false })}
      >
        <RouterLink to="/#banner">
          <img
            className={style.logo}
            src="/img/bluntolympicscut.png"
            alt="BluntDAO Logo"
          />
        </RouterLink>
      </Link>

      <div style={{ padding: '1.75em' }}>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;
