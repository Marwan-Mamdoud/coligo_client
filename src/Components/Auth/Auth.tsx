import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { login, logout } from "./authSlice";
export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogin = () => {
    dispatch(login());
    navigate("/"); // بعد الدخول يروح على صفحة محمية
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth"); // بعد الخروج يرجع للصفحة الرئيسية
  };

  return (
    <div className="Auth_Page">
      <div className="Auth_Container">
        <h1>Authentication</h1>
        {isAuthenticated ? (
          <>
            <p className="login_text">You are logged in</p>
            <button onClick={handleLogout} className="Logout_btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="logout_text">You are not logged in</p>
            <button onClick={handleLogin} className="Login_btn">
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
