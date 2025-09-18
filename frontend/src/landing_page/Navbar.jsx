import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container p-2">
        <Link to={"/"}>
          <img
            src="/media/logo.svg"
            alt="logo"
            style={{ width: "140px" }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"   // ✅ no extra space
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/product"}>Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/support"}>Support</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="fa-solid fa-bars"></i>  {/* ✅ fixed */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
