function Pricing() {
    return (
        <div className="container Hero  ">
            <div className="row m-2">
                <div className="col-md-6   ">
                    <h4 className="opacity">Unbeatable pricing</h4>
                    <p className="mt-4 text-muted">We poineered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.</p>
                    </div>
                    {/* <div className="col-1"></div> */}
                <div className="col-md-6   ">
                    <div className="row text-center">

                        <div className="col pt-1 pl-1  border">
                            <h1 className="mb-3">&#x20b9;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds.</p>
                            <p></p>
                        </div>
                        <div className="col pt-1 pl-1 border">
                            <h1 className="mb-3">&#x20b9;20</h1>
                            <p>Intraday and F&O </p>
                        </div>
                       
                    </div>
                    </div>
                     <p>
                    <a className="fw-medium top   text-decoration-none ">See pricing<i class="fa-solid fa-arrow-right "></i></a>
                    </p>
                    </div>
                    </div>

    );
}

export default Pricing;