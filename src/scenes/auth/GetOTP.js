import { Input, Button } from "@material-ui/core"
import React, {useState} from "react"
import {useDispatch } from "react-redux"
import * as authActions from "redux/actions/AuthActions"
const GetOTP =({history}) => {
    const [number, setNumber] = useState('')
    const dispatch = useDispatch();
    const getOTP=()=>{
        dispatch(authActions.getOTP({number})).then(res=>{
            history.push("/varifyOTP")
        }).catch(err=> history.push("/varifyOTP"))
    }
 return(
     <div>
     <Input name="number" onChange={e=> setNumber(e.target.value)}/>
     <Button onClick={getOTP} color="primary">get otp</Button>
     </div>
 )
}
export default GetOTP;