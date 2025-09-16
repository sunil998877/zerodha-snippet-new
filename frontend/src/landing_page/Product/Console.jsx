import React from 'react'

const Console = () => {
  return (
    <div>
        
        <div className="container Hero-console">
            <div className="row mx-2 ">
            <div className="col-md-4 mt-console ">
                    <h4 className='fs-4 opacity'>Console</h4>
                    <p className='text-muted mt-4'>
                    The central dashboard for your Zerodha <br /> account. Gain insights into your trades and <br /> investments with in-depth reports and <br /> visualisations.
                    </p>

                    <div className='d-flex aligen-items-center gap-5 '>
                        <a href="">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                        
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

export default Console