import React from "react";
import "./education.scss";
import { Form, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { AiOutlineUser } from "react-icons/ai";
export const Educatiofrm = () => {
  return (
    <>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12 col-lg-4 pt-4">

          <h2 className="tttle">Education & Qualification</h2>
            <div className="mt-4">
            <Form>
             

              {/* start radio */}
               <div className="d-flex justify-content-between">
              <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        Below 10th
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        10th pass
                      </label>
                    </div>

                    
                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        12th pass
                      </label>
                    </div>

                    <div className="form-check detail_btn_ca text-center">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        for="flexRadioDefault1"
                      >
                        Graduate & Above
                      </label>
                    </div>
                    </div>
                                                             
                    <Form.Group controlId="exampleForm.ControlInput1" className="mt-4">
    <Form.Label className="pa">School details</Form.Label>
    <Form.Control type="email" placeholder="Enter ypur school name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="pb">collage</Form.Label>
    <Form.Control type="email" placeholder=" Enter your collage name" />
  </Form.Group>


        <div className="btn_bdr py-2 px-2 fixed-bottom" >
            
        <button className="common_btn "> Save   </button>
        </div>
 

              {/* end radio */}
            </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
