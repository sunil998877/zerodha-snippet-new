import { Link } from "react-router-dom";
function PageNotfound() {
    return ( 
        <>
        <div className="container Hero1  d-flex justify-content-center align-items-center custom">
            <div className="row text-center  page bg-light text-black">
                <div className="col-md-12">
                    <h1 className="">404 Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <p>Visit <Link className="text-decoration-none" to={"/"}>Zerodha's home page</Link></p>

                </div>
        </div>
        </div>
        </>
     );
}

export default PageNotfound;