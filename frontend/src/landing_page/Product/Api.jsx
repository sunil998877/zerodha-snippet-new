import React from 'react'

const Api = () => {
  return (
    <div>
         <div className="container Hero-console">
            <div className="row mx-2 ">
            <div className="col-md-4 mt-console ">
                    <h4 className='fs-4 opacity'>Kite Connect API</h4>
                    <p className='text-muted mt-4'>
                    Build powerful trading platforms and <br /> experiences with our super simple HTTP/ <br />JSON APIs. If you are a startup, build your <br /> investment app and showcase it to our <br /> clientbase. 
                    </p>

                    <div className='d-flex aligen-items-center gap-5 '>
                        <a href="">Kite Connect <i class="fa-solid fa-arrow-right"></i></a>
                        
                    </div>

                    

                </div>
                <div className="col-1"></div>
                <div className="col-md-7">
                   <div>
                   <a href="">
                    <img src="\media\products-console.png" alt="" className='img-fluid' />
                   </a>
                   </div>
                </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default Api