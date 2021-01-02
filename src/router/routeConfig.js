// public routes
import loginJobseeker from "components/auth/login/loginJobseeker"
import VerifyOTP from "components/auth/login/verifyOtp";
import LoginForm from "components/auth/login/loginRecruiter";

export const publicRoutes = [
  {
    key: "loginJobseeker",
    path: "/",
    component: loginJobseeker,
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
