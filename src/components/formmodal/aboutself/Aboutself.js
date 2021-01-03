import React from "react";
import { Form, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import "./aboutself.scss";
export const Aboutself = () => {
  const handleClick = () => {};

  const handleDelete = () => {};

  return (
    <>
      <div className="conatiner">
        {" "}
        <div className="row">
          {" "}
          <div className="col-12 col-lg-4">
            <div className="px-3 pt-3 pb-2 ">
              <Form>
                <h3 className="about_oa"> i am </h3>

                <div>
                  <div className="">
                    {/* <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
      /> */}

                    <Chip
                      className="mr-2"
                      label="Quick Learner"
                      onClick={handleClick}
                      // onDelete={handleDelete}
                    />

                    <Chip
                      className="mr-2"
                      label="Focused"
                      onClick={handleClick}
                    />

                    <Chip
                      className="mr-2 mt-2"
                      label="Honest"
                      onClick={handleClick}
                    />

                    <Chip
                      className="mr-2 mt-2"
                      label="Team Worker"
                      onClick={handleClick}
                    />

                    <Chip label="Quick Learner" onClick={handleClick} />

                    <Chip label="Disciplined" onClick={handleClick} o />
                  </div>

                  <div className="mt-4 ">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="text-capitalize text-dark font-weight-bold">
                        Write about your self
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} />

                      <button className="common_btn mt-4"> Save </button>
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};
