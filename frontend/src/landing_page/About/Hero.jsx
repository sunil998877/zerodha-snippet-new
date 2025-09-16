import React from 'react'

const Hero = () => {
  return (
   <div className="container Hero-about">
    <div className="row text-center">
        <h4 className='fs-4 '>
        We pioneered the discount broking model in India.<br/>
        <p className='mt-about '>Now, we are breaking ground with our technology. </p>
        </h4>

        <div className="container">
        <hr className='mt-horizontal  '/>
        
            <div className="row margin-x-about ">
                
                <div className=" col-md-6 text-muted">
                  <p className='text-start'>We kick-started operations on the 15th of August, 2010 <br /> with the goal of breaking all barriers that traders and <br /> investors face in India in terms of cost, support, and <br /> technology. We named the company Zerodha, a <br /> combination of Zero and "Rodha", the Sanskrit word for <br /> barrier.</p>
                  <p className='text-start'>
                  Today, our disruptive pricing models and in-house <br /> technology have made us the biggest stock broker in <br /> India. 
                  </p>
                  <p className='text-start'>
                  Over 1.6+ crore clients place billions of orders every year <br /> through our powerful ecosystem of investment <br /> platforms, contributing over 15% of all Indian retail <br /> trading volumes.
                  </p>
                </div>
                <div className=" col-md-6  text-muted">
                  <p className='text-start'>In addition, we run a number of popular open online <br /> educational and community initiatives to empower retail <br /> traders and investors. </p>
                  <p className='text-start'>
                  <a href="" className='text-decoration-none'>Rainmatter</a>, our fintech fund and incubator, has invested <br /> in several fintech startups with the goal of growing the <br /> Indian capital markets.
                  </p>
                  <p className='text-start'>
                  And yet, we are always up to something new every day. <br /> Catch up on the latest updates on our <a href="" className='text-decoration-none'>blog</a> or see what <br /> the media is <a href="" className='text-decoration-none'>saying about us</a> or learn more about our <br /> business and product <a href="" className='text-decoration-none'>philosophies.</a> 
                  </p>
                </div>
            </div>
            </div>
       

    </div>
   </div>
  )
}

export default Hero;