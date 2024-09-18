import { useEffect, useContext } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
// pages
import Home from "./Pages/Home";
import Tokenomics from "./Pages/Tokenomics/Tokenomics";
import Fallback from "./Pages/fallback/fallback";

// styles
import "./App.css";
import "./styles/Slider.scss";
import "./styles/Fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// web 3 auth

import { GenContext } from "./gen-state/gen.context";
// Utils
import Notification from "./component/Notification/Notification";

const TRACKING_ID = "UA-203278283-2"; // OUR_TRACKING_ID
 
const App = () => {
  const { dispatch } = useContext(GenContext);

  // Google Analytics
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window?.location.pathname + window?.location.search);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/events"
            component={() => {
              window.location.replace("https://lu.ma/sesh");
              return null;
            }}
          ></Route>
          <Route exact path="/" component={Home} />
          {/* <Route path="/tickets" component={Tickets} /> */}
          {/* <Route exact path="/calendar" component={Calendar} /> */}
          <Route component={Fallback} />
        </Switch>
      </div>
      <Notification />
    </BrowserRouter>
  );
};

export default App;
