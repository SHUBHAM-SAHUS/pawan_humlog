import React from "react";
import { useForm } from "react-hook-form";
import { BiFilterAlt } from "react-icons/bi";
import pp from "assets/images/pp.png";
import rr from "assets/images/rr.png";
import tt from "assets/images/tt.png";
import ss from "assets/images/ss.png";
import nn from "assets/images/nn.png";
import mm from "assets/images/mm.png";
import hh from "assets/images/hh.png";
import ee from "assets/images/ee.png";
import dd from "assets/images/dd.png";
import "./jobintres.scss";
import {useHistory} from "react-router-dom"
export const Jobintrested = () => {

  const history = useHistory()

 const update=(data)=>{
   history.push("/user/Userprofile");
  console.log(data);

 }

  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="job_main">
        <div className="container ">
          <form onSubmit={handleSubmit(update)}>
          <div className="row ">
            <div className=" col-lg-4 ">
              <div className="d-flex justify-content-end pt-2">
                <BiFilterAlt className="job_icon_a" />
                <p className="job_icon_b">filter by Sector</p>
              </div>
              <hr className="hrr" />
              <div className="d-flex justify-content-around mt-4">
                <div className="col-4">
                  <input type="checkbox" id="house" className="d-none"  ref={register} name="jobintrested" value="House Help/ Care Taker"/>
                  <label for="house">
                    <div className="d-flex justify-content-center">
                      <img src={hh} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center">
                    {" "}
                    House Help/ Care Taker
                  </h6>
                </div>

                <div className="col-4">
                  <input type="checkbox" id="sale" className="d-none"  ref={register} name="jobintrested" value="Field Sales Agent"/>
                  <label for="sale">
                    <div className="d-flex justify-content-center">
                      <img src={hh} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center"> Field Sales Agent</h6>
                </div>

                <div className="col-4">
                  <input type="checkbox" id="plumber" className="d-none"  ref={register} name="jobintresteed" value="Plumbling"/>
                  <label for="plumber">
                    <div className="d-flex justify-content-center">
                      <img src={nn} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center"> Plumbling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <input type="checkbox" id="tailer" className="d-none" ref={register} name="jobintres"  value="Tailor"/>
                  <label for="tailer">
                    <div className="d-flex justify-content-center">
                      <img src={tt} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center"> Tailor</h6>
                </div>

                <div className="col-4">
                  <input type="checkbox" id="peon" className="d-none"  ref={register} name="jobintrested" value="Office boy/Peon"/>
                  <label for="peon">
                    <div className="d-flex justify-content-center">
                      <img src={pp} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center"> Office boy/Peon</h6>
                </div>

                <div className="col-4">
                  <input type="checkbox" id="calling" className="d-none"  ref={register} name="jobintrested" value="Tele Calling"/>
                  <label for="calling">
                    <div className="d-flex justify-content-center">
                      <img src={mm} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center"> Tele Calling</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between">
                <div className="col-4">
                  <input type="checkbox" id="ele" className="d-none" ref={register} name="jobinterested" value="Electrician" />
                  <label for="ele">
                    <div className="d-flex justify-content-center">
                      <img src={ee} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center"> Electrician</h6>
                </div>

                <div className="col-4">
                  <input type="checkbox" id="recep" className="d-none"  ref={register}  value="Receptionist" name="jobintrested"/>
                  <label for="recep">
                    <div className="d-flex justify-content-center">
                      <img src={ss} width="100%" alt="image" />{" "}
                    </div>
                  </label>
                  <h6 className="job_title text-center">Receptionist</h6>
                </div>

                <div className="col-4">
                  <input type="checkbox" id="plumbing" className="d-none"  ref={register}   value="Delivery" name="jobintrested" />
                  <label for="plumbing">
                    <div className="d-flex justify-content-center">
                      <img src={ss} width="100%" alt="image" />{" "}
                    </div>
                  </label>

                  <h6 className="job_title text-center"> Delivery</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button className="common_btn" type="submit"> Save </button>
          </div>
          </form>
        </div>

        <div className="col-12 col-lg-4"></div>

        {/* </form> */}
      </div>
    </>
  );
};
