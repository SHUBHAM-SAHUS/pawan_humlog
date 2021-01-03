import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import pp from "../../../assets/images/pp.png";
import rr from "../../../assets/images/rr.png";
import tt from "../../../assets/images/tt.png";
import ss from "../../../assets/images/ss.png";
import nn from "../../../assets/images/nn.png";
import mm from "../../../assets/images/mm.png";
import hh from "../../../assets/images/hh.png";
import ee from "../../../assets/images/ee.png";
import dd from "../../../assets/images/dd.png";

// import "./Industryinterested";
export const Industryinterested = () => {
  return (
    <>
      <div className="job_main">
        <div className="container ">
          <div className="row ">
            <div className=" col-lg-4 pt-4 pb-3">
              <div className="px-4 ">
                <h6 className="ya"> Industry Intrested in</h6>
                <h3 className="yb">select maximum 3 categories </h3>
              </div>
              <div className="d-flex justify-content-around mt-4">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={hh} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center">
                    {" "}
                    House Help/ Care Taker
                  </h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img src={ss} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Field Sales Agent</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={nn} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={tt} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={pp} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={mm} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={ee} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={ss} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>

                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <img src={nn} width="100%" alt="image" />{" "}
                  </div>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="btn_bdr px-2 py-2">
            <button className="common_btn mt-"> Save </button>
          </div>
        </div>
      </div>
    </>
  );
};
