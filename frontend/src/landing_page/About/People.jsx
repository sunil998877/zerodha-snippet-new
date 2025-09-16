import React from 'react'

const People = () => {
  return (
    <div>
        <div className="container Hero-people">
        <h3 className='opacity text-center fs-4'>People</h3>
            <div className="row margin-x-people">
             <div className="col-md-5 mt-people   margin-x-left">
                  <img src="\media\nithinKamath.jpg" alt=""   className='nithin-img img-fluid '/>
                  <div className='name-founder'>
                  <h3 className='text-center fs-5 opacity'>Nithin Kamath</h3>
                  <p className='text-center mt-3 text-muted'>Founder, CEO</p>
                  </div>
              </div>
              
              <div className="col-md-7 mt-people text-muted">
                        <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br /> hurdles he faced during his decade long stint as a trader. Today, <br /> Zerodha has changed the landscape of the Indian broking industry. 
                        </p>
                        <p>
                        He is a member of the SEBI Secondary Market Advisory Committee <br /> (SMAC) and the Market Data Advisory Committee  (MDAC). 
                        </p>
                        <p>
                        Playing basketball is his zen.
                        </p>
                        <p>
                        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>
                        </p>
              </div>

            </div>
        </div>

    </div>
  )
}

export default People