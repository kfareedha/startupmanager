import React from "react";
import { FaRoad, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"; // font awesome

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo" style={{ marginLeft: 50 }}>
        {/* {
                if(user.role=='user'){
                    
                }
            } */}

        {user && user.role == "admin" ? (
          <h3>
            <i>
              <Link to="/admin">StartupManager</Link>
            </i>
          </h3>
        ) : (
          <h3>
            <i>
              <Link to="/">StartupManager</Link>
            </i>
          </h3>
        )}
      </div>
      <ul style={{ marginRight: 50 }}>
        {user ? (
          <li>
            {" "}
            <h5>
              <button className="btn" onClick={onLogout}>
                <FaSignInAlt /> Logout
              </button>
            </h5>{" "}
          </li>
        ) : (
          <>
            {" "}
            <li>
              <h5>
                {" "}
                <Link to="/login">
                  <FaSignOutAlt />
                  Login
                </Link>
              </h5>{" "}
            </li>
            <li>
              <h5>
                {" "}
                <Link to="/register">
                  <FaUser />
                  Register
                </Link>
              </h5>{" "}
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
