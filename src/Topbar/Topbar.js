import React, { useEffect } from "react";
import "./topbar.scss";
import CovidImg from "../assets/images/icons8-coronavirus-100.png";
import { Link } from "react-router-dom";

const Topbar = ({ fetchFailedStatus }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="topBar__Wrapper">
      <div className="inner__Wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logoContainer">
            <img src={CovidImg} alt="CovidImg Logo" />
          </div>
        </Link>
        <div className="outer__Container">
          <div className="leftSide">
            <h1>COVID-19 Coronavirus Tracker</h1>
            {fetchFailedStatus ? (
              <p className="fetchFailedInfo">
                Because of some (CORS) api issues this data is not real-time
                this is backup data.Try to refresh page!
              </p>
            ) : null}
          </div>
          <div className="rightSide">
            <p
              className="github_repo_link"
              onClick={() =>
                window.open(
                  "https://github.com/ivan-hill/covid-19-tracker",
                  "_blank"
                )
              }
            >
              Click to See Github Repo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
