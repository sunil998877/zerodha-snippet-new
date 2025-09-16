import Trading from "./Trading";
// import Investment from "./Investment";
import Steps from "./Steps";
import Unbeatable from "./Unbeatable";

// import verifyOTP from "./verifyOTP";

import OpenAccount from '../OpenAccount';
function Signup() {
    return ( 
        <>
        <Trading/>
        {/* <Investment/> */}
        <Steps/>
        <Unbeatable/>
        {/* <verifyOTP/> */}
        
        <OpenAccount/>
      </>

     );
}

export default Signup;