  import A from  "../Components/Resources/me.jpg";

const Card =({name,whatsappno,call,profession})=>{
    return(
        <div className="Card">
            <div className='Card1' style={{backgroundImage:`url(${A})`,backgroundRepeat:"no-repeat",backgroundSize:"100% ",backgroundPosition:"center",}}>
                {/* <img src={require("../Components/Resources/me.jpg")} alt=""/> */}
                
                <span id="name">{name}</span>
            </div>
            <div>
                 <img src={require("../Components/Resources/tail.jpeg")} id="cardPic" alt=""/>
            </div>
            <div>
                    <div id="cardDetails">
                            <div>&#9733;&#9733;&#9733;&#9733;</div>
                            <div>4.2 Rating {profession}</div>
                    </div>
                     <div className="social">
                            <div>
                                <img src={require("../Components/Resources/WHAT.png")} alt=""/>
                                <span>{whatsappno}</span>
                            </div>
                            <div>
                                <img src={require("../Components/Resources/C.png")} alt=""/>
                                <span>{call}</span>
                            </div>
                            <div>
                                <img src={require("../Components/Resources/C.png")} alt=""/>
                                <span>Message</span>
                            </div>
                                    <button id="button">SEE FULL PROFILE</button>
                        </div>
                     </div>

        </div>
    )


}



export default Card;
// return(
//     <div className='Card'>
//         <div className='Card1'>
//         <img src={require("../Components/Resources/me.jpg")} alt=""/>
//         <span id="name">{name}</span>
//         </div>
//         <div>
//         <img src={require("../Components/Resources/tail.jpeg")} id="cardMid" alt=""/>
//         </div>
        
      
//         <div>
//              <div id="cardDetails">
//                 <div>&#9733;&#9733;&#9733;&#9733;</div>
//                 <div>4.2 Rating</div>
                
//             </div> 
//             <div className="social">
//                 <div>
//                     <img src={require("../Components/Resources/WHAT.png")} alt=""/>
//                     <span>{whatsappno}</span>
//                 </div>
//                 <div>
//                     <img src={require("../Components/Resources/C.png")} alt=""/>
//                     <span>{call}</span>
//                 </div>
//                 <div>
//                     <img src={require("../Components/Resources/C.png")} alt=""/>
//                     <span>Message</span>
//                 </div>
//                 <button id="button">SEE FULL PROFILE</button>
//             </div>
//         </div>        
   
// </div>
// )