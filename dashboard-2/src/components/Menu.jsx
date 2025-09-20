import React, { useState,useEffect } from "react";
import axios from "axios";
// import { useAuth } from "./userAuth";

import { Link } from "react-router-dom";

const Menu = () => {
  // const [user,Loading] = useAuth();
   const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

   useEffect(() => {
       axios.get("http://localhost:3001/api/v1/auth/profile",{withCredentials:true})
         .then(res => setUser(res.data))
         .catch(() => setUser(null))
         .finally(() => setLoading(false));
     }, []);


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus ">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr className="border" /> 
        {!Loading && (
          user ? (
            <div className="profile" onClick={handleProfileClick}>
              <div className="avatar">
                <img src={user.avatar || "/default-avatar.png"} alt="Profile" style={{ width: 40, borderRadius: "50%" }} />
              </div>
              <p className="username">{user.firstName}</p>

              {isProfileDropdownOpen && (
                <div className="dropdown">
                  <Link to="/profile">My Profile</Link>
                  <Link to="/logout">Logout</Link>
                </div>
              )}
            </div>
          ) : (
            <a href="http://localhost:3001/api/v1/auth/google">Login with Google</a>
          )
        )}
       
      </div>
    </div>
  );
};

export default Menu;
