import Footer from "../Components/Footer"
import { HeaderBrown } from "../Components/HeaderWhite"

 const AddWork =()=>{
    return(
        <div className="addWork">
            <HeaderBrown/>
                <img src={require("../Components/Resources/me.jpg")} alt=""/>
                <div className="AddWorkContainer">
                    <h3>ShowCase Your Work</h3>
                    <div id="addWorkBody">
                        <input type="text" placeholder="Work Status"/>
                        {/* <br/> */}
                        <input type="text" placeholder="Add Caption or Description"/>
                        
                        <input type="file" placholder="Upload File ---"/>
                        {/* <br/> */}
                        <img src={require("../Components/Resources/plum.jpeg") } id="uploadImage" alt=""/>
                        <div id="change">Change</div>
                        <div id="upload">Upload</div>
                    </div>
                </div>
                <div className="previous">
                     <h3>Previous Work</h3>
                     <div>
                        <img src={require("../Components/Resources/plum.jpeg")} alt=""/>
                        <img src={require("../Components/Resources/tail.jpeg")} alt=""/>
                        <img src={require("../Components/Resources/car.jpeg")} alt=""/>
                        <img src={require("../Components/Resources/me.jpg")} alt=""/>
                        <img src={require("../Components/Resources/plum.jpeg")} alt=""/>
                     </div>

                </div>
           
            <Footer/>
        </div>
    )
 }

 export default AddWork;