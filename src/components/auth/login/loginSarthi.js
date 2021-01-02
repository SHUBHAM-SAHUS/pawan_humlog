import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import logo from "assets/images/logob.png";
import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
// import "components/auth/jobseeker/Login/node_modules/style/login/login.scss";
// user action
import { FieldConfig } from "./FieldConfig.js";

import * as userAuthAction from "redux/actions/AuthActions";
//import {Link} from "react-router-dom";
// service
import * as commonService from "utils/CommonService.js";
// ui components
import CommonForm from "components/shared/ui-components/common-form";
import { useCookies } from "react-cookie";
// Field config to configure form
const LoginForm = ({ history }) => {
  const [localCookies, setCookie] = useCookies(["email", "password"]);
  const [loginForm, setLoginForm] = useState({});
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const setCookies = () => {
    let d = new Date();
    d.setTime(d.getTime() + 1000000000 * 15);
    setCookie("email", loginForm.value.email, { path: "/", expires: d });
    setCookie("password", loginForm.value.password, { path: "/", expires: d });
  };

  const onSubmit = (data) => {
    debugger;
    // e.preventDefault();
    // let remember_check = document.getElementById("remember_me");
    dispatch(userAuthAction.login({ body: { ...data } })).then((res) => {
      if (res.value.success) {
        // if (remember_check.checked) setCookies();

        commonService.forSuccess("Signed in successfully", "Success");
        history.push("/");
      }
    });
  };
  const setForm = (loginForm) => {
    debugger;
    if (localCookies.email && localCookies.password)
      loginForm.setValue({
        email: localCookies.email,
        password: localCookies.password,
      });
    setLoginForm(loginForm);
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
       <input name="email" ref={register({ required: true})} />
     <input name="password" type="password" ref={register} />
       <input type="submit" />
     </form> */}

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
                      <form type="submit">
                        <div className="mb-2">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            ref={register({ required: true })}
                          />
                          <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-2">
                          <label
                            for="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            ref={register({ required: true })}
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="mb-2 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="exampleCheck1"
                            >
                              Check me out
                            </label>
                          </div>

                          <div ref={register}>
                            <h6 className="forget text-primary font-light">
                              {" "}
                              forget password
                            </h6>
                          </div>
                        </div>

                        <button className="common_btn" type="submit">
                          {" "}
                          Login{" "}
                        </button>
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
export default LoginForm;
