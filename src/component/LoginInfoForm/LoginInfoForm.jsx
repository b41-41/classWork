import React from "react";
import { useSelector } from "react-redux";

const LoginInfoForm = () => {
  const userState = useSelector((state) => state.userInfo);
  const userInfo = userState.userInfo;

  return (
    <div className="userInfo">
      <span className="userInfo_name">{userInfo.displayName} 님</span>
      <br />
      <span className="userInfo_info">{userInfo.email}</span>
    </div>
  );
};

export default LoginInfoForm;
