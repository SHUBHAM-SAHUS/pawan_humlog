import React, { useState } from "react";
import "./userprofilescss/user.scss";
import {
  DropdownButton,
  ButtonGroup,
  DropdownType,
  SplitButton,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsBriefcase, BsPencil, BsBook } from "react-icons/bs";
import { GiPencilBrush, GiPencilRuler } from "react-icons/gi";
import { IoBookOutline } from "react-icons/";
import { FiPhoneCall } from "react-icons/fi";
import { FaTransgender, FaLanguage } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { CommonModal } from "components/commonmodal/Commonmodal";
// import { CommonModal } from "../commoncomponent/CommonModal";
// import { CommonModal } from "../commoncomponent/CommonModal";
export const Userprofile = (props) => {
  const [showModal, setshowModal] = useState(false);
  debugger;
  return (
    <>
     <CommonModal/>

      <div className="main_user">
        <div className="container">
          <div className="row">
            <div className="col-12 main-section text-center">
              <div className=" pt-4 px-2 px-lg-4">
                <div className="">
                  <img
                    src="https://3iservices.in/humlog/img/Vector@2x.png"
                    className="rounded-circle img-thumbnail"
                  />
                  <h5 className="mt-1">User Name</h5>
                  <p>
                    <i className="fa fa-map-marker"></i> +91 0000 1234 99 |
                    Delhi | RZD 90 A, Dabri Ext.
                  </p>
                  <h5 className="ltr_clr mt-2 text-left user_m">
                    57% Profile completion
                  </h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      <span className="sr-only">70% Complete</span>
                    </div>
                  </div>
                  <br />
                  <div className=" ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <AiOutlineUser className="user_icon " />
                        <h6 className="user_one text-left ml-1"> About me </h6>
                      </div>

                      <BsPencil className=" pencil" />
                    </div>

                    <p className="p1 ltr_clr text-left">
                      I am a hardworking and dedicated person. I am an excellent
                      team worker and have skills such as Internet surfing, MS
                      world, Computer, Basic Excel. I am looking for
                      opportunities in Tele Calling.
                    </p>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div>
                        <BsBriefcase className="user_icon" />
                        <h6 className="user_one text-left ml-1">
                          work experience
                        </h6>
                      </div>
                      <BsPencil className=" pencil" />
                    </div>

                    <p className="p2 text-left user_tt">Previous Company</p>

                    <h6
                      className="text-left text-danger mt-1 user_ta"
                      onClick={() => setshowModal(true)}
                    >
                      Click to fill details
                    </h6>

                    {showModal && (
                      <CommonModal
                        showModal={showModal}
                        setshowModal={setshowModal}
                      /> 
                    )}
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <AiOutlineSetting className="user_icon " />
                      <h6 className="user_one text-left ml-1">
                        Industry Interested
                      </h6>
                    </div>
                    <BsPencil className=" pencil" />
                  </div>
                  <div className="d-flex justify-content-left">
                    <button type="button" className="user_btna">
                      Corporate
                    </button>
                    <button type="button" className="user_btnb ml-2">
                      Workshop
                    </button>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <GiPencilBrush className="user_icon text-left ml-1" />
                      <h6 className="user_one text-left ml-1">skills</h6>
                    </div>
                    <BsPencil className=" pencil" />
                  </div>

                  <p className="p2 text-left user_tt"> school</p>
                  <h6
                    className="text-left  user_ta  mt-1"
                    onClick={() => setshowModal(true)}
                  >
                    {" "}
                    Click to fill details{" "}
                  </h6>

                  <p className="p2 text-left user_tt mt-2"> collage</p>
                  <h6
                    className="text-left  user_ta"
                    onClick={() => setshowModal(true)}
                  >
                    {" "}
                    Click to fill details{" "}
                  </h6>

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <BsBook className="user_icon" />

                      <h6 className="user_one text-left ml-1">
                        education & qualification
                      </h6>
                    </div>
                    <BsPencil className=" pencil" />
                  </div>

                  <div>
                    <div className="d-flex justify-content-left">
                      <DropdownButton
                        menuAlign="right"
                        title="..."
                        id="dropdown-menu-align-right"
                        className="btn_drop"
                      >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <div className="mb-2"></div>
                  <h6 className="text-left  user_ta  ">
                    {" "}
                    Click to fill details{" "}
                  </h6>

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <AiOutlineYoutube className="user_icon " />
                      <h6 className="user_one text-left ml-1">video resume</h6>
                    </div>
                    <BsPencil className="user_icon pencil" />
                  </div>
                  <h6 className="text-left  user_ta ">
                    {" "}
                    click to upload video{" "}
                  </h6>

                  <div>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <AiOutlineUser className="user_icon " />

                        <h6 className="user_one text-left ml-1">
                          persnal information
                        </h6>
                      </div>

                      <BsPencil className="user_icon pencil" />
                    </div>
                  </div>
                  {/* start */}
                  <div className="px-0  px-lg-5">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <span className="user_iconp">
                          {" "}
                          <FiPhoneCall />
                        </span>
                        <span className="user_ya"> Mobile No. </span>
                        <p className="user_yb">+91 0000 1234 99</p>
                      </div>

                      <div>
                        <span className="user_iconp">
                          {" "}
                          <MdCake />
                        </span>
                        <span className="user_ya"> date of birth </span>
                        <p
                          className="user_ta"
                          onClick={() => setshowModal(true)}
                        >
                          click fill the details
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <span className="user_iconp">
                            {" "}
                            <FaTransgender />
                          </span>
                          <span className=""> Mobile No. </span>
                          <p className="p2">+91 0000 1234 99</p>
                        </div>

                        <div>
                          <span className="user_iconp">
                            {" "}
                            <FaLanguage />
                          </span>
                          <span className="user_ya"> language i know </span>
                          <p
                            className="user_yb"
                            onClick={() => setshowModal(true)}
                          >
                            {" "}
                            click fill details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <span className="user_iconp">
                      {" "}
                      <FaLanguage />
                    </span>
                    <span className="user_ya"> language i know </span>
                    <p className="user_yb"> click fill details</p>
                  </div>

                  {/* end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
