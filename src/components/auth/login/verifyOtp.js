import { Input, Button } from "@material-ui/core"
import { useForm } from "react-hook-form";
import logo from "assets/images/logob.png";
import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
import "style/otp/otp.scss";


import React, {useState} from "react"
import {useDispatch } from "react-redux"
import * as authActions from "redux/actions/AuthActions"
const VerifyOTP =({history}) => {
    const { register, handleSubmit } = useForm();

    const [number, setNumber] = useState('')
    const dispatch = useDispatch();
    const verifyOTP=()=>{
        dispatch(authActions.varifyOTP({number})).then(res=>{
            history.push("/")
        }).catch(err=> history.push("/"))
    }
    const onSubmit = data => {debugger

        console.log(data)
    
    }
 return(
    <>
    {/* <Input name="otp" onChange={e=> setNumber(e.target.value)}/>
   <div>
   <Button onClick={verifyOTP} color="primary" variant="contained">varify otp</Button> */}

    <div className="top_main">
      <div className="row  no-gutters">
        <div className="col-md-8 otp_ra">
          {/* <img src={forest} width="100%" alt="forest" /> */}
        </div>

        <div className="col-md-4  otp_rb">
          <div className="px-3 px-lg-5   pt-5">
            <div className="d-flex justify-content-center">
              <img src={logo} width="200px" alt="logo" className="mx-auto" />
            </div>

            <p className="otp_ver text-center text-uppercase mt-4">
              {" "}
              OTP Verfication
            </p>

            <div>
           <form  onSubmit={handleSubmit(onSubmit)}>
                <p className="otp_b text-bold p-0 m-0 text-center">
                  {" "}
                  Enter Otp sent to{" "}
                </p>
                <input name="otp" className ="otp_input py-2" ref={register({ required: true})} />
               
                <div className="form-check mt-2 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck  otp_tc">
                    <p className=" otp_tc">
                      {" "}
                      i hereby agree to the{" "}
                      <a href="#" className="text-decoration-none">
                        {" "}
                        T&c
                      </a>{" "}
                      of the{" "}
                      <a href="#" className="text-decoration-none">
                        {" "}
                        privacy policy{" "}
                      </a>
                    </p>{" "}
                  </label>
                </div>

                <div className="mt-2 d-flex justify-content-center mb-3 mt-4">
                  {" "}
                  Did not received the Otp?{" "}
                  <a href="#" className="text-decoration-none">
                    {" "}
                    Resend
                  </a>{" "}
                </div>
                <button className="common_btn" type="submit">
                  {" "}
                  Verify & Proceed{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    //  <div className="text-center">
    //  <Input name="otp" onChange={e=> setNumber(e.target.value)}/>
    //  <div>
    //  <Button onClick={verifyOTP} color="primary" variant="contained">varify otp</Button>
    //  </div></div>
 )
}
export default VerifyOTP;