import { Input, Button } from "@material-ui/core"
import React, {useState} from "react"
import {useDispatch } from "react-redux"
import * as authActions from "redux/actions/AuthActions"
const VarifyOTP =({history}) => {
    const [number, setNumber] = useState('')
    const dispatch = useDispatch();
    const varifyOTP=()=>{
        dispatch(authActions.varifyOTP({number})).then(res=>{
            history.push("/")
        }).catch(err=> history.push("/"))
    }
 return(
     <div className="text-center">
     <Input name="otp" onChange={e=> setNumber(e.target.value)}/>
     <div>
     <Button onClick={varifyOTP} color="primary" variant="contained">varify otp</Button>
     </div></div>
 )
}
export default VarifyOTP;