import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { Outlet } from "react-router-dom";

const Authlayout = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="244017338925-1i31saunppmmjqqqqtum8a8phet8sep9.apps.googleusercontent.com">
        <Outlet />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Authlayout;
