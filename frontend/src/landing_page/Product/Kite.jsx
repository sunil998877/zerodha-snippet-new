import React from 'react'

const Kite = () => {
  return (
    <div>
        <div className="container ">
            <div className="row mx-3 ">
                <div className="col-md-7">
                   <div>
                   <a href="">
                    <img src="\media\products-console.png" alt="" className='img-fluid' />
                   </a>
                   </div>
                </div>
                <div className="col-1"></div>
                <div className="col-md-4 mt-5 ">
                    <h3 className='fs-4 opacity'>Kite</h3>
                    <p className='text-muted mt-4'>
                    Our ultra-fast flagship trading platform with <br /> streaming market data, advanced charts, an <br /> elegant UI, and more. Enjoy the Kite <br /> experience seamlessly on your Android and <br />iOS devices. 
                    </p>

                    <div className='d-flex aligen-items-center gap-5 '>
                        <a href="">Try demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" className='mx-4'>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className='d-flex aligen-items-center gap-3 mt-4'>
                        <img src="\media\google-play-badge.svg" alt="" style={{width:"150px"}}/>
                        <img src="\media\appstoreBadge.svg" alt="" style={{width:"130px"}}/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Kite;