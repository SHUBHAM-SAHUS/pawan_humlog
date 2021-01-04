import React from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";
import logowa from "assets/images/humlogwa.png";
import logowb from "assets/images/hunlogwb.png";
import { GoThreeBars } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
export const Header = () => {
  const location = useLocation();
  console.log(location);

  const opennav = () => {
    document.getElementById("mysidenavbar").style.width = "70%";
  };

  const closebtn = () => {
    document.getElementById("mysidenavbar").style.width = "0px";
  };

  return (
    <>
      <div className="main_head fixed-top">
        <div className="d-flex justify-content-center align-items-center">
          <img src={logowb} className="mx-auto" className="header_logo" />

          {location.pathname === `/dashboard` ? (
            <div className="text-right">
              <div className="bars_icon">
                {" "}
                <GoThreeBars onClick={opennav} className="bar_iconn" />
              </div>{" "}
            </div>
          ) : null}
          {location.pathname === `/community` ? (
            <div className="text-right">
              <div className="bars_icon">
                <GoThreeBars onClick={opennav} className="bar_iconn" />{" "}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="sidenavbar" id="mysidenavbar">
        <div className="close_icon">
          {" "}
          <a href="javascript:void(0)" onClick={closebtn}>
            {" "}
            <GrFormClose className="close_iconn" />{" "}
          </a>{" "}
        </div>
        <div className="p-5">
          <a href="/" className="d-block">
            {" "}
            home{" "}
          </a>
        </div>
      </div>
    </>
  );
};
