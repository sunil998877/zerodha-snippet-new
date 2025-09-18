import { Link } from "react-router-dom";

function Hero() {
 
    return ( 
        <div className="container text-md-center     Hero">
            <div className="row text-center d-flex justify-content-center mt-2 ">
                <img src="\media\homeHero.png" alt="Hero Image" className="mb-5 img-fluid" style={{width:"45rem"}}  />
                <h1 className="mt-3 fs-3 opacity text-center" >Invest in everything</h1>
                <p className="fs-5 mt-1 text-muted text-center">Online plateform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to={"/signup"}  >
                <button className=" pl-2 pr-2 btn btn-color  opacity text-center   fs-5 mt-4 rounded-1   custom-hover " style={{ width: "180px" }} >Sign up Now</button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;
