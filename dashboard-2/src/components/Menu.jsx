import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useAuth } from "./userAuth";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { endpoints, APP_BASE_URL } from "../config";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.post(endpoints.logout, {}, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      localStorage.removeItem("token");
      setUser(null);
      if (APP_BASE_URL) {
        window.location.href = `${APP_BASE_URL}/signup_auth`;
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  }



  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, []);

  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0);

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }



    //  Profile fetch karna using saved token ---
    const savedToken = localStorage.getItem("token");
    console.log(savedToken);

    if (savedToken) {
      axios.get(endpoints.profile, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${savedToken}` }
      })
        .then(res => setUser(res.data))
        .catch((err) => {
          console.log(err.response?.data || err.message);
          if (err.response?.status === 401) {
            localStorage.removeItem("token");
          }
          setUser(null);
        })
        .finally(() => {
          setLoading(false)
        });
    } else {

      setLoading(false);
    }

  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul className="unorder-list">
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr className="border" />
        {!Loading && (
          user ? (
            <div className="profile" ref={dropdownRef}>
              <div className="avatar">
                <img src={user.avatar || "/assets/react.svg"} alt="Profile" style={{ width: 30, borderRadius: "50%" }} onClick={() => setIsOpen(!isOpen)} />
              </div>
              {isOpen && (
                <div className="dropdown">
                  <p className="text-center overflow-hidden font-size">
                    <img src={user.avatar || "dashboard-2/src/assets/react.svg"} alt="Profile" style={{ width: 35, borderRadius: "50%" }} onClick={() => setIsOpen(!isOpen)} /> <br />
                    {user.firstName} {user.lastName} <br />
                    {user.email}
                  </p>
                  <p><Link onClick={handleLogout} className="link">Logout</Link></p>
                </div>
              )}
            </div>
          ) : (
            <a href={endpoints.oauthGoogle}>
              <button className="btn btn-primary rounded-3 login-with-google">Login</button>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
