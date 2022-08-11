import { Link } from "react-router-dom";
import Footer from "../Components/Footer"
import {HeaderWhite} from "../Components/HeaderWhite"

 const SignIn =()=>{
    return(
        <div>
            <HeaderWhite/>
            <div className="signIn">
                <div>
                    <h3>Sign In</h3>
                    <form>
                        <input type="text" placeholder="Username" />
                        <br/>
                        <input type="password" placeholder="PassWord"/>
                        <br/>
                        <span>Forget Password</span>
                        <button>Sign In</button>
                        <div id="signForget">Don't you have an account? <Link to="/SignUp"><span>SignUp</span></Link></div>
                        <div id="or">________or________</div>
                        <div id="google">Google</div>
                        <div id="facebook">Facebook</div>

                    </form>

                </div>
                <img src={require("../Components/Resources/tail.jpeg")} alt=""/> 
            </div>
            <Footer/>
        </div>
    )
 }

 export default SignIn;