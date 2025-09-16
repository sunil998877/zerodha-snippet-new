
function Awards() {
    return ( 
        <>
        <div className="container   Hero">
            <div className="row">
                <div className="col-md-6 ">
                       <img src="\media\largestBroker.svg" alt="image-Award" className="img-fluid"/>
                </div>
                <div className="col-md-6  mt-5">
                     <h2>Largest stocks broker in India</h2>
                     <p className="mb-5 text-muted" >2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in.</p>
                    <div className="row  ">
                        <div className="col-6">
                            <ul >
                                <li className="text-muted"><p className="text-muted">Futures and Options</p></li>
                                <li className="text-muted"><p className="text-muted">Commodity derivatives</p></li>
                                <li className="text-muted"><p className="text-muted">Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                             <ul >
                                <li className="text-muted"><p className="text-muted">Stocks & IPOs</p></li>
                                <li className="text-muted"><p className="text-muted">Direct mutual funds</p></li>
                                <li className="text-muted"><p className="text-muted">Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="\media\pressLogos.png" alt="" style={{width:"90%"}}/>
                </div>
                
            </div>
        </div>
        
        </>
     );
}

export default Awards;
