// public routes
import loginJobseeker from "components/auth/login/loginJobseeker"
import LoginForm from "components/auth/login/loginRecruiter";
import { JobSeekerlogin } from "components/auth/jobseeker/Login/Jobseekerlogin";
import VerifyOTP from "components/auth/jobseeker/Login/verifyOtp";
import { BasicDetails } from "components/jobseeker/basicdetail/BasicDetails";
import { Userprofile } from "components/jobseeker/userprofile/Userprofile";
import { Aboutself } from "components/formmodal/aboutself/Aboutself";
import { Educatiofrm } from "components/formmodal/education/Educationfrm";
import { Industryinterested } from "components/formmodal/industry/Industryinteresred";
import { Userprofileinput } from "components/formmodal/userprofie/Userprofileinput";
import { Progressbar } from "components/formmodal/progressbar/Progressbar";
import { Jobmatch } from "components/jobseeker/jobmatch/Jobmatch";
import { Notification } from "components/jobseeker/notification/Notification";





export const publicRoutes = [
  {
    key: "Notification",
    path: "/",
    component:Notification,
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
