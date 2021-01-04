import { useHistory } from "react-router-dom";

export const  Userrollbtn=()=>{
     const history= useHistory();
    
    return(
        <>
            <div className="d-flex  justify-content-between px-3 mt-2 justify-content-center">
                  <button className="btn_b mr-1" onClick={()=> history.push("/")}> Member </button>
                  <button className="btn_a  ml-1"> Employer </button>
                </div>

                <div className="d-flex  justify-content-between px-3 mt-2 justify-content-center mt-2 mx-auto">
                  <button className="btn_b mr-1 px-5"> Sarthi </button>
                  <button className="btn_b  ml-1 px-5"> Guru </button>
                </div>
       </>
    )
}