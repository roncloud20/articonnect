const CatBanner=({to})=>{
    return(
        <div className="catBanner">
            <div>
               <div>lorem ipsum</div>
                <div>lorem ipsum</div>
            </div>
            <div className='SearchBox'>
                <input type='search' placeholder='Looking for?' onChange={to}/>
                <i class="fa fa-search"></i>
            </div>
            <div id="artisanWork">
                <div>
                    <div id="barb">Barbing Service  &nbsp; &#128473;</div>
                    <div>Plumbing Service &nbsp; &#128473;</div>
                    <div>Catering Service &nbsp;&#128473;</div>
                    <div>Painting Service &nbsp;&#128473;</div>
                    <div>Automobile Service &nbsp;&#128473;</div>
                    <div>Electronics Service &nbsp;&#128473;</div>
                </div>
                <div>
                    <div>Gadget Repair &#128473;</div>
                    <div>Fashion Design &#128473;</div>
                    <div>Teaching &#128473;</div>
                    <div>Carpentry &#128473;</div>
                    <div>Design &#128473;</div>
                    
                </div>
            </div>
        </div>
    )
}

export default CatBanner;

// var barb =document.getElementById("barb");
// barb.addEventListener("click",function(){
//     console.log("me")
// })