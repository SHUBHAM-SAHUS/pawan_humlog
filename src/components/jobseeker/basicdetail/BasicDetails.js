import React from "react";
// import { Header } from "../commoncomponent/Header";
import { AiOutlineUser } from "react-icons/ai";
import { CgGenderFemale } from "react-icons/cg";
import "./userDetail/userdetail.scss";
import { BiBookOpen } from "react-icons/bi";
import age from "assets/images/age.png";
import { FcBusinessman } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
// import { Commonbtn } from "../commoncomponent/Commonbtn";
import { useForm } from "react-hook-form";
import { register } from "serviceWorkerRegistration";
export const BasicDetails = () => {
  const { register, handleSubmit } = useForm();

  const update = (val) => {
    console.log(val);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="basicdetail  ">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-12 col-lg-5  px-0 px-lg-2 pt-3">
              <form onSubmit={handleSubmit(update)}>
                <div className="form-group mt-3">
                  <label for="name" className=" control-label">
                    <AiOutlineUser className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Name<font className="text-danger">*</font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter your full Name here"
                        ref={register}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <CgGenderFemale className="detail_icon_user" />
                    <b>
                      {" "}
                      Gender<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className=" d-flex justify-content-between">
                    <div className="form-check detail_btn_a text-center aaa">
                      <input
                        className="form-check-input d-none aaa"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        ref={register}
                      />
                      <label className="form-check-label " for="male">
                        male
                      </label>
                    </div>

                    <div className="form-check detail_btn_b text-center aaa">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        ref={register}
                      />
                      <label className="form-check-label " for="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <img src={age} width="35%" className="detail_icon_user" />

                    <b>
                      {" "}
                      Age<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="d-flex justify-content-between">
                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="18-24"
                        value="18-24"
                        ref={register}
                      />
                      <label className="form-check-label " for="18-24">
                        18-24 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="25-30"
                        value="25-30"
                        ref={register}
                      />
                      <label className="form-check-label " for="25-30">
                        25-30 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="31-35"
                        value="31-35"
                        ref={register}
                      />
                      <label className="form-check-label " for="31-35">
                        31-35 Yrs
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="age"
                        id="36+ yrs"
                        value="36+ yrs"
                        ref={register}
                      />
                      <label className="form-check-label " for="36+ yrs">
                        36+ Yrs
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <BiBookOpen className="detail_icon_user" />

                    <b>
                      {" "}
                      Qualification<font className="text-danger">*</font>{" "}
                    </b>
                  </label>

                  <div className="d-flex justify-content-between">
                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="qualification"
                        value="below 10"
                        id="below 10th"
                        ref={register}
                      />
                      <label className="form-check-label " for="below 10th">
                        below 10th
                      </label>
                    </div>

                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="qualification"
                        id="10th pass"
                        ref={register}
                        value="10th pass"
                      />
                      <label className="form-check-label " for="10th pass">
                        10th Pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="qualification"
                        id="12th Pass"
                        ref={register}
                        value="12th Pass"
                      />
                      <label className="form-check-label " for="12th Pass">
                        12th Pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_cb text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        id="Graduate & Above"
                        ref={register}
                        name="qualification"
                        value="Graduate & Above"
                      />
                      <label
                        className="form-check-label "
                        for="Graduate & Above"
                      >
                        Graduate & Above
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <FcBusinessman className="detail_icon_user" />

                    <b>
                      {" "}
                      Currently working <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>

                  <div className="d-flex">
                    <div className="form-check detail_btn_cc text-center mr-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="Currently working"
                        id="yes"
                        value="yes"
                        ref={register}
                      />
                      <label className="form-check-label " for="yes">
                        yes
                      </label>
                    </div>

                    <div className="form-check detail_btn_cc text-center ml-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="Currently working"
                        id="No"
                        value="No"
                        ref={register}
                      />
                      <label className="form-check-label " for="No">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-2">
                  <label for="email" className="cols-sm-2 control-label">
                    <FaAward className="detail_icon_user" />

                    <b>
                      {" "}
                      Work Experience <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>

                  <div className="d-flex">
                    <div className="form-check detail_btn_cc text-center mr-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="Work Experience"
                        id="yess"
                        value="yess"
                        ref={register}
                      />
                      <label className="form-check-label " for="yess">
                        yes
                      </label>
                    </div>

                    <div className="form-check detail_btn_cc text-center ml-1">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="Work Experience"
                        id="noo"
                        value="noo"
                        ref={register}
                      />
                      <label className="form-check-label " for="noo">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group  mt-2">
                  <label for="name" className=" control-label">
                    <AiOutlineHome className="detail_icon_user" />
                    <b p-0 m-0>
                      {" "}
                      Your Home district <font className="text-danger">
                        *
                      </font>{" "}
                    </b>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon"></span>
                      <input
                        type="text"
                        className="form-control"
                        name="Your Home district"
                        id="name"
                        placeholder="Typer your district here"
                        ref={register}
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <button className="common_btn" type="submit">
                    {" "}
                    Save{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
