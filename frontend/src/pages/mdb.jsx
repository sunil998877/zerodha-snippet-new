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
    
    <MDBContainer fluid className="p-5  my-folder  "> 

      <MDBRow  className='img-signup'>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid  img-sign"  alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
         <Signup />

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>

    </>
  );
}

export default App;