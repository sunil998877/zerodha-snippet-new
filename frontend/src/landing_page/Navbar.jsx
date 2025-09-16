import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg    fixed-top  "  >
            <div className="container  p-2 "  >
             <Link to={"/"}>
                 <img src="\media\logo.svg " alt="" className="fixed " style={{width:"140px"}}  />
             </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"   id="navbarSupportedContent "  >
                    <form className="d-flex justify-content-center ">
                    <ul className="navbar-nav  mb-lg-0  "  >
                        <li className="nav-items ">
                            <Link className="nav-link " to={"/signup"}>Signup</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link " to={"/about"}>About</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link " to={"/product"}>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/pricing"}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/support"}>Support</Link>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link " ><i class="fa-solid fa-bars"></i></a>
                        </li>
                    </ul>
                    </form>
                    
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
