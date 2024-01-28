import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ handleLogout }) => {
  // Call the handleLogout function and redirect to the login page
  handleLogout();

  return <Redirect to='/login' />;
};

export default Logout;
