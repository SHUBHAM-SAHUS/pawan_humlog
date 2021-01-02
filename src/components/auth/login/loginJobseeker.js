import { Input, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "assets/images/logob.png";
import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
import * as authActions from "redux/actions/AuthActions";
import "style/login/login.scss";

const GetOTP = ({ history }) => {
  const { register, handleSubmit } = useForm();
  // const [contact, setContact] = useState('')
  // const dispatch = useDispatch();
  // const getOTP=()=>{debugger
  //     dispatch(authActions.getOTP({contact})).then(res=>{
  //         if (res.value.success){
  //             history.push("login/VerifyOTP")
  //         }

  //     }).catch(err=> history.push("login/VerifyOTP"))
  // }

  const onSubmit = (data) => {
    debugger;

    console.log(data);
  };

  return (
    <>
      <div>
        {/* <Input name="contact" onChange={e=> setContact(e.target.value)}/>
   <Button onClick={getOTP} color="primary">get otp</Button> */}

        <div className="main_login">
          <div className="row  no-gutters">
            <div className=" col-12 col-lg-4   p-0  rb">
              <div className=" login_aa ">
                <div className="d-flex justify-content-center ">
                  <img src={logo} width="50%" alt="logo" />
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <h2 className="logo_bb">
                    हिन्दी/<strong className="logo_cc">English</strong>
                  </h2>
                </div>
                <div className="d-flex  justify-content-between px-3 mt-2 justify-content-center">
                  <button className="btn_b mr-1"> Member </button>
                  <button className="btn_a  ml-1"> Employer </button>
                </div>

                <div className="d-flex  justify-content-between px-3 mt-2 justify-content-center mt-2 mx-auto">
                  <button className="btn_b mr-1 px-5"> Sarthi </button>
                  <button className="btn_b  ml-1 px-5"> Guru </button>
                </div>

                <div className=" mt-3">
                  <h2 className="login_ba text-center">
                    {" "}
                    with your social network
                  </h2>

                  <div className="d-flex justify-content-center justify-content-between px-2 mt-3">
                    <button className=" btn_c mr-1">
                      {" "}
                      <img
                        src={facebook}
                        alt="face"
                        className="login_facebook_a"
                      />{" "}
                      Facebook{" "}
                    </button>
                    <button className="btn_d ml-1">
                      {" "}
                      <img
                        src={google}
                        alt="face"
                        className="login_google_a"
                      />{" "}
                      Google{" "}
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <p className="fnt">or </p>{" "}
                  </div>

                  <div className="mt-2 ">
                    <h2 className="login_ba text-center capitalize">
                      {" "}
                      Login with mobile number{" "}
                    </h2>

                    <div className="mt-4">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-center p-0 m-0">
                          {" "}
                          Enter 10 digit mobile number{" "}
                        </p>
                        <input
                          name="contact"
                          className="login_input py-2"
                          ref={register({ required: true })}
                        />

                        <div className="mt-3">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetOTP;
