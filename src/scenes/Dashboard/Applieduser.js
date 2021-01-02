import React from "react";
import men from "../images/men.jpg";
import {useDispatch, useSelector} from "react-redux"
import "../style/common/notification.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { MdTouchApp } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";

import {
  DropdownButton,
  SplitButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
export const Applieduser = () => {
    const dispatch =useDispatch();
    
  return (
    <>
      <div className="main_notification border">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 d-flex pt-3 pb-3 justify-content-between">
              <div className="d-flex">
                <div className="">
                  <img
                    src={men}
                    width="80px"
                    height="80px"
                    alt="men"
                    className="rounded-circle"
                  />
                </div>

                <div className="ml-3">
                  <h2 className="user_nme mt-1 ">Ajay Rathod</h2>
                  <p className="user_ua mt-2">Justidial</p>
                  <p className="user_ub">Delhi </p>
                  <p className="user_uc"> Status Applied </p>
                </div>
              </div>

              {/* start */}

              <div className="mb-2">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    ....
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <MdTouchApp className="fnt_icon" /> View
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <TiTickOutline className="fnt_icon" /> Select
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <AiOutlineCloseCircle className="fnt_icon" /> Reject
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <FaRegListAlt className="fnt_icon" /> Schedule interview
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <h6 className="post_time"> 3h</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
