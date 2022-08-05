import ArtisanRecom from "../Components/ArtisanRecom";
import CatBanner from "../Components/CatBanner";
import Footer from "../Components/Footer"
import HeaderWhite from "../Components/HeaderWhite"


 const Categories =()=>{
    return(
        <div>
            <HeaderWhite/>
            <CatBanner/>
            <h2>Base On Your Selection</h2>
            <ArtisanRecom/>
            <Footer/>
        </div>
    )
 }

 export default Categories;