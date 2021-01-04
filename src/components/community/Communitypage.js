import React from "react";
import "style/community/community.scss";
import { BsCameraVideo, BsFillImageFill } from "react-icons/bs";
import { RiCalendarEventLine } from "react-icons/ri";
// import men from "../../assets/images/men.png";
// import { HeadFooter } from "./HeadFooter";
// import { Userpost } from "./Userpost";

export const Communitypage = () => {
  return (
    <>
      <div className="community_main border ">
        <div className="row no-gutters">
          <div className="col-12 col-lg-4  ">
            <div className="  zz">
              <div className="d-flex px-3 pt-2">
                <div className="">
                  <img
                    src={require("../../assets/images/men.jpg")}
                    width="30px"
                    alt="user"
                    className="rounded-circle"
                  />
                </div>

                <div className="m_input ml-2">
                  <input placeholder="Whats your Mind" className="inpt" />
                </div>
              </div>

              <div className="d-flex  justify-content-between px-4 bo mt-4 pt-2 pb-2">
                <div className="d-flex">
                  <BsCameraVideo className="comm_aa" />
                  <p className="comm_ab ml-1"> Live</p>
                </div>
                |
                <div className="d-flex">
                  <BsFillImageFill className="comm_aa" />
                  <p className="comm_ab ml-1"> Photos</p>
                </div>
                |
                <div className="d-flex">
                  <RiCalendarEventLine className="comm_aa" />
                  <p className="comm_ab ml-1"> Event</p>
                </div>
              </div>
            </div>
            <div className="scrll">
              {/* <Userpost />
              <Userpost /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
