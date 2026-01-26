import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";

const AuthLayer = ({ children }) => {
  const [auth] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  if (auth) {
    return children;
  } else {
    return <LoginPage />;
  }
};

export default AuthLayer;