// public routes
import loginJobseeker from "components/auth/login/loginJobseeker"
import LoginForm from "components/auth/login/loginRecruiter";
import { JobSeekerlogin } from "components/auth/jobseeker/Login/Jobseekerlogin";
import VerifyOTP from "components/auth/jobseeker/Login/verifyOtp";
import { BasicDetails } from "components/jobseeker/basicdetail/BasicDetails";




           
  
export const publicRoutes = [
  {
    key: "BasicaDetails",
    path: "/",
    component: BasicDetails,
    exact: true
  },
  {
    key: "loginJobseeker",
    path: "/login/user",
    component: loginJobseeker,
    exact: true
  },
  {
    key: "loginRecruiter",
    path: "/login/recruiter",
    component: LoginForm,
    exact: true
  },
  {
    key: "VerifyOTP",
    path: "/login/VerifyOTP",
    component: VerifyOTP,
    exact: true
  }
];

export const privateRoutes = [
];
