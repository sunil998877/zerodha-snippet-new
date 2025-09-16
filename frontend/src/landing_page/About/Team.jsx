import React from 'react'

import { useState } from 'react'

const Team = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [isToggled4, setIsToggled4] = useState(false);
  const [isToggled5, setIsToggled5] = useState(false);
  const [isToggled6, setIsToggled6] = useState(false);
  const [isToggled7, setIsToggled7] = useState(false);
  return (
    <div>
      <div className="container Hero">
        <div className="row">
          <div className="col-12 d-flex flex-wrap aligen-items-center justify-content-evenly gap-5">
            <div className='mb-founder'>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Nikhil Kamath</h3>
                <p className='text-center mt-3 text-muted'>Co-founder & CFO</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted '   onClick={() => setIsToggled(!isToggled)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2' style={{ display: isToggled ? "block" : "none" }} >
                    Nikhil is an astute and <br /> experienced investor, and he  <br /> heads financial planning at  <br /> Zerodha. An avid reader, he  <br /> always appreciates a good <br /> game of chess.
                  </p>
                </div>
              </div>
              </div>

            </div>
            <div className='mb-founder'>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Dr. Kailash Nadh</h3>
                <p className='text-center mt-3 text-muted'>CTO</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled2(!isToggled2)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled2 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2' style={{ display: isToggled2 ? "block" : "none" }} >
                  Kailash has a PhD in Artificial <br /> Intelligence & Computational <br />Linguistics, and is the brain <br /> behind all our technology and <br /> products. He has been a <br /> developer from his <br /> adolescence and continues to <br /> write code every day. 
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className='mb-founder'>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Venu Madhav</h3>
                <p className='text-center mt-3 text-muted'>COO</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled3(!isToggled3)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled3 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2' style={{ display: isToggled3 ? "block" : "none" }} >
                  Venu is the backbone of  <br /> Zerodha taking care of <br />operations and ensuring that <br /> we are compliant to rules and <br />regulations. He has over a <br /> dozen certifications in financial <br />markets and is also proficient <br /> in technical analysis. <br /> Workouts, cycling, and <br /> adventuring is what he does <br /> outside of Zerodha. 
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className=''>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Hanan Delvi</h3>
                <p className='text-center mt-3 text-muted'>CCO</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled4(!isToggled4)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled4 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2 mb-5' style={{ display: isToggled4 ? "block" : "none" }} >
                  We take pride in the way we <br />support our clients, and Hanan <br /> is responsible for this with his <br /> never ending flow of energy. <br /> He is the man behind many of <br /> our support initiatives that <br /> have helped us stay ahead of <br /> the game. A free thinker, <br /> Hanan can be seen posing as <br /> one in his free time. 
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className=''>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Seema Patil</h3>
                <p className='text-center mt-3 text-muted'>Director</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled5(!isToggled5)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled5 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2 mb-5' style={{ display: isToggled5 ? "block" : "none" }} >
                  Seema who has lead the <br /> quality team since the <br /> beginning of Zerodha, is now a <br /> director. She is an extremely <br />disciplined fitness enthusiast. 
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className=''>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Karthik Rangappa</h3>
                <p className='text-center mt-3 text-muted'>Chief of Education</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled6(!isToggled6)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled6 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2 mb-5' style={{ display: isToggled6 ? "block" : "none" }} >
                  Karthik "Guru" Rangappa <br /> single handledly wrote Varsity, <br />Zerodha's massive educational  <br /> program. He heads investor <br />education initiatives at Zerodha <br /> and loves stock markets, <br /> classic rock, single malts, and <br /> photography. 
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className=''>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-image img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Austin Prakesh</h3>
                <p className='text-center mt-3 text-muted'>Director Strategy</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled7(!isToggled7)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled7 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start mt-2 mb-5' style={{ display: isToggled7 ? "block" : "none" }} >
                  Austin is a successful self- <br />made entrepreneur from <br /> Singapore. His area of <br /> specialty revolves around  <br /> helping organisations including <br /> grow by optimizing revenue <br />streams and creating growth <br /> strategies. He is a boxing <br />enthusiast and loves collecting <br />exquisite watches. 
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className='invisible'>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-img img-fluid ' />
              <div className=''>
                <h3 className='text-center fs-5 opacity'>Nikhil Kamath</h3>
                <p>Co-founder & CFO</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled7(!isToggled7)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled7 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start' style={{ display: isToggled7 ? "block" : "none" }} >
                    Nikhil is an astute and <br /> experienced investor, and he  <br /> heads financial planning at  <br /> Zerodha. An avid reader, he  <br /> always appreciates a good <br /> game of chess.
                  </p>
                </div>
              </div>

            </div>
            </div>
            <div className='invisible'>
            <div className='text-center'>
              <img src="\media\Nikhil.jpg" alt="" className='nithin-img img-fluid ' />
              <div className=''>
                <h3>Nikhil Kamath</h3>
                <p>Co-founder & CFO</p>
                <div className=' box-author text-center'>
                  <p className='Bro text-muted ' onClick={() => setIsToggled7(!isToggled7)}>
                    Bro <i className="fa fa-chevron-down" id='arrow'
                      style={{ transform: isToggled7 ? 'rotate(180deg)' : '' }}
                    ></i>
                  </p>
                  <p className='content text-start' style={{ display: isToggled7 ? "block" : "none" }} >
                    Nikhil is an astute and <br /> experienced investor, and he  <br /> heads financial planning at  <br /> Zerodha. An avid reader, he  <br /> always appreciates a good <br /> game of chess.
                  </p>
                </div>
              </div>

            </div>
            </div>
           
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Team