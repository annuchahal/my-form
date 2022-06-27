import react from "react";
import {Link} from "react-router-dom";

function Buttonse(){
    return(
        <><div className="second">        <label className="bg">Fullname</label>
        <input type="text" placeholder="" name="fullname" required="true"/>
        <label>Father Name</label>
        <input type="text" placeholder="" name="fathername" required="true"/>
        <label>Address</label>
        <input type="text" placeholder="" name="address" required="true"/>
        <label>Contact no</label>
        <input type="text" placeholder="" name="contact" required="true"/>
        <label>Technology</label>
        <input type="text" placeholder="" name="technology" required="true"/>
        <label>Langugage</label>
        <input type="text" placeholder="" name="language" required="true"/>
        
         <button type="submit">Submit</button>
         {/* <li>
             <Link to ="/about" >Submit</Link>
         </li> */}
        </div>
   </>
    );
}
export default Buttonse;
    //   <BrowserRouter>
    //   <Route path="/about" component={SignUpForm}/>
    //   </BrowserRouter>
    // )