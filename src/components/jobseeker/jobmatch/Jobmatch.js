import React, { useState } from "react";
import './jobmatch.scss'
import swiggy from "../../../assets/images/swiggy.png";
import { MdAttachMoney } from "react-icons/md";
import { VscBriefcase } from "react-icons/vsc";
import { IoIosCloseCircle } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi";
import { BsCheck } from "react-icons/bs";
export const Jobmatch = () => {
  const [value, setValue] = useState([1, 3]);

  return (
    <>
      <div className="main_job">
        <div className="container">
          <div className="row no-gutters">
            <div className=" col-12 col-lg-4   px-3 pt-4  pb-5 border">
              <h4>job matches </h4>
              <div className=" mt-3">
                <div className="d-flex pt-2 ">
                  <div>
                    {" "}
                    <img
                      src={swiggy}
                      alt="companylogo"
                      width="150px"
                      className="img-rounded"
                    />{" "}
                  </div>

                  <div className="ml-2">
                    <h2 className="Job_ta">Delivery Executive </h2>
                    <p className="job_tb">Swiggy </p>
                    <address className="job_tc">Gurgoan, 122003 </address>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex">
                    <MdAttachMoney className="_job_ua" />
                    <p className="_job_ub ml-1"> Sallary</p>
                  </div>
                  <h6 className="ca"> 10,000/Month </h6>

                  <div className="d-flex mt-2">
                    <VscBriefcase className="_job_ua" />
                    <p className="_job_ub ml-1"> Experience Required</p>
                  </div>
                  <h6 className="ca"> 1 year min. or more </h6>

                  <div className="d-flex mt-2">
                    <VscBriefcase className="_job_ua" />
                    <p className="_job_ub ml-1"> job type</p>
                  </div>
                  <h6 className="ca"> field </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between col-12 col-lg-4 mt-3">
            <button className="btn_va ">
              {" "}
              <IoIosCloseCircle className="cross_icon" /> skip{" "}
            </button>
            <button className="btn_vb d-flex">
              {" "}
              <div className="box_ia">
                {" "}
                <HiOutlineStar className="job_pa" />{" "}
              </div>{" "}
              save
            </button>
            <button className="btn_vc d-flex">
              {" "}
              <div className="box_ib">
                <BsCheck className="job_pb " />{" "}
              </div>{" "}
              accepct
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
