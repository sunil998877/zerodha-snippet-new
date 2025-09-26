import React from 'react';
import './mdb.css';
import Signup from './Signup.jsx';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <>
    
    <MDBContainer fluid className="p-5 my-folder auth-center"> 

      <MDBRow className='img-signup justify-content-center align-items-center'>

        <MDBCol col='10' md='6' className="d-flex justify-content-center mb-4 mb-md-0">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid img-sign"  alt="Phone image" />
        </MDBCol>

        <MDBCol col='12' md='6' className="d-flex justify-content-center">
          <Signup />

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>

    </>
  );
}

export default App;