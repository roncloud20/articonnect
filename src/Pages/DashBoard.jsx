import Footer from "../Components/Footer";
import Comment from "../Components/Comment";
import {HeaderBrown} from "../Components/HeaderWhite"
const Dash = ()=>{
    return(
        <div>
            <HeaderBrown/>
            <div className="Dash">
                <h2>Hi, Kolawole</h2>
                <div>Previous Work</div>
                <div>
                        <div className="DashImage">
                            <img src={require("../Components/Resources/banner.png")} alt=""/>
                            <img src={require("../Components/Resources/banner1.jpg")} alt=""/>
                            <img src={require("../Components/Resources/car.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/me.jpg")} alt=""/>
                            <img src={require("../Components/Resources/plum.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/tail.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/banner.png")} alt=""/>
                            <img src={require("../Components/Resources/banner1.jpg")} alt=""/>
                            <img src={require("../Components/Resources/car.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/me.jpg")} alt=""/>
                            <img src={require("../Components/Resources/plum.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/tail.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/banner.png")} alt=""/>
                            <img src={require("../Components/Resources/banner1.jpg")} alt=""/>
                            <img src={require("../Components/Resources/car.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/me.jpg")} alt=""/>
                            <img src={require("../Components/Resources/plum.jpeg")} alt=""/>
                            <img src={require("../Components/Resources/tail.jpeg")} alt=""/>

                        </div>
                </div>
                <div>
                        <div className="dashProfile">
                            <h3>My Profile</h3>
                            <div id="dashProfile">

                                <img src={require("../Components/Resources/me.jpg")} alt=""/>
                                <div>
                                     <h3>Adekeye Ajakaye</h3>
                                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Ab natus tenetur vel ipsam recusandae modi voluptatibus facere maxime
                                         ducimus, quam ullam eaque, aut ipsa quibusdam sunt accusamus, officiis soluta tempora.
                                    </p>
                                    <button>Edit Profile</button>
                                </div>

                            </div>
                        </div>
                </div>
                <h3>Work Review</h3>
                <div>
                    <Comment/>
    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dash;




