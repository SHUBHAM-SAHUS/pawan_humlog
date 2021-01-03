import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./userprofile.scss";

export const Userprofileinput = () => {
  return (
    <>
      <div className=" ">
        <div className="row no-gutters">
          <div className="col-12 col-lg-4 pt-4">
            <div></div>
            <h2 className="prnl_head_aa px-3"> Personal Information</h2>

            <div>
              <Form>
                <div className="px-3">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className="lbl_a">Mobile number</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=" +91-7566985174"
                      className="input_fld"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className="lbl_a">Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder=""
                      className="input_fld"
                    />
                  </Form.Group>
                  <label className="lbl_a"> Gender</label>
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
                        Male
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
                        Female
                      </label>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h6 className="lbl_a"> Languages I know</h6>
                    {/* <MultiSelect
       className="select_multi"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      /> */}
                  </div>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">current location </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Type your district here"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">Home Location </Form.Label>
                    <Form.Control
                      type=""
                      placeholder="Type your district here"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGroupEmail" className="mt-3">
                    <Form.Label className="lbl_a">
                      {" "}
                      Preferred Work Location{" "}
                    </Form.Label>
                    <Form.Control type="" placeholder="location" />
                  </Form.Group>
                </div>
                <div className="btn_bdr py-2 px-2  bbc">
                  <button className="common_btn  "> Save </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
