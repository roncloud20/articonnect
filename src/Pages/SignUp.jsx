import { Link } from "react-router-dom";
import Footer from "../Components/Footer"
import {HeaderWhite} from "../Components/HeaderWhite"

const SignUp =()=>{
    return(
        <div>
            <HeaderWhite/>
            <div id="signUp">
                <img src={require("../Components/Resources/tail.jpeg")} alt=""/> 
                 <div>
                        <h3>Sign Up</h3>
                        <form>
                            <input type="text" placeholder="Username" />
                            <br/>
                            <input type="password" placeholder="Phone Number"/>
                            <br/>
                            <input type="password" placeholder="PassWord"/>
                            <br/>
                            <input type="password" placeholder="Confirm Password"/>
                            <br/>
                            
                            <button>Sign In</button>
                            <div id="sign">Already Have an Account?<Link to="/SignIn"><span>SignIn</span></Link></div>
                            <div  id="or">________or________</div>
                            <div id="google">Google</div>
                            <div id="facebook">Facebook</div>

                        </form>              
                 </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default SignUp;