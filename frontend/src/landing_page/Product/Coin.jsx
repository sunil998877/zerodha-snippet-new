import React from 'react'

const Coin = () => {
  return (
    <div>
         <div className="container mt-5">
            <div className="row mx-3 ">
                <div className="col-md-7">
                   <div>
                   <a href="">
                    <img src="\media\products-coin.png" alt="" className='img-fluid' />
                   </a>
                   </div>
                </div>
                <div className="col-1"></div>
                <div className="col-md-4 mt-5 ">
                    <h3 className='fs-4 opacity'>Coin</h3>
                    <p className='text-muted mt-4'>
                    Buy direct mutual funds online, commission- <br />free, delivered directly to your Demat <br /> account. Enjoy the investment experience <br /> on your Android and iOS devices. 
                    </p>

                    <div className='d-flex aligen-items-center gap-5 '>
                        <a href="">Coin <i class="fa-solid fa-arrow-right"></i></a>
                        
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

export default Coin