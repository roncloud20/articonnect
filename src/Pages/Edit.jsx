import Footer from "../Components/Footer"
import { HeaderBrown } from "../Components/HeaderWhite"

 const Edit =()=>{
    return(
        <div>
            <HeaderBrown/>
            <div className="edit">
                <img src={require('../Components/Resources/plum.jpeg')} alt/>
                <img src={require("../Components/Resources/me.jpg")} id="editProfile"alt=""/>
                <div className="editInput">
                    <input type="text" placeholder="Change Usernsme"/>
                    <input type="text" placeholder="Update Password"/>
                    <input type="text" placeholder="Update Email or Password"/>
                    <button id="editButton">Done</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
 }

 export default Edit;