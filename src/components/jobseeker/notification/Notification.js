import React,{useState} from "react";
import men from "../../../assets/images/men.jpg";
import {Select,MenuItem} from  "@material-ui/core";
import "./notification.scss";
import { AiOutlineDelete, AiOutlineMinusCircle } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";



import { AiOutlineSetting } from "react-icons/ai";
import {
  DropdownButton,
  SplitButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
export const Notification = () => {

  const [choice,setchoice] = useState("")

  const update=(e)=>{
    console.log(e.target.value);
  }

  return (
    <>
      <div className="main_notification border">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 d-flex pt-3 pb-3 ">
              <div className="">
                <img
                  src={men}
                  width="30px"
                  height="30px"
                  alt="men"
                  className="rounded-circle"
                />
              </div>

              <div>
                <h2 className="noti_user">
                  Your profile is 60% complete. Strengthen your profile to get
                  more job matches{" "}
                </h2>

                <button className="btn_noti"> Edit profile</button>
              </div>

              {/* start */}

              <div className="mb-2">
                {/* <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    ....
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      {" "}
                      <AiOutlineDelete /> Delete{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <AiOutlineMinusCircle /> Unfollow{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      {" "}
                      <ImSwitch /> TournOff{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      {" "}
                      <AiOutlineSetting /> Setting{" "}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}

                <Select value={choice} displayEmpty
                onChange={update}
                >
                   <MenuItem value="" disabled >... </MenuItem>
                   <MenuItem value={2}>php </MenuItem>
                   <MenuItem value={3}>java </MenuItem>
                   <MenuItem value={4}>css</MenuItem>
                   <MenuItem value={5}>html </MenuItem>
                  </Select>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
