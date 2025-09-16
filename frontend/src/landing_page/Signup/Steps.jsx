function Steps() {
    return (
          <div className="bg-light light-height">
            <div className="container  Hero media1" >
                <div className="row mx  text-center ">
                    <h4 className="mt-5 fs-4 opacity">Steps to open a demat account with Zerodha </h4>
                    <div className="col-md-6 d-flex justify-content-center mt-5 ">
                        <img src="\media\steps-acop.svg" alt=""  className="img-fluid" style={{width:"400px"}}/>
                    </div>
                  
                   
                    <div className="col-md-6 mt1     ">
                    
                         <div class="acop-steps-container d-flex gap-4 ">
                         <div class="acop-steps "><p className="center">01</p></div>
                         <p class="acop-steps-text fs-5 text-muted fw-medium">Enter the requested details</p>
                         
                         </div>
                          <div class="acop-steps-container d-flex gap-4 mt-4">
                         <div class="acop-steps step2 "><p className="center">02</p></div>
                         <p class="acop-steps-text fs-5 fw-medium text-muted">Complete e-sign & verification</p>
                         </div>
                          <div class="acop-steps-containers d-flex gap-4 mt-4">
                         <div class="acop-steps "><p className="center">03</p></div>
                         <p class="acop-steps-text fs-5 fw-medium text-muted">Start investing!</p>
                         </div>
                          
                     

                    
                </div>
            </div>
       </div>
       </div>
    );
}

export default Steps;