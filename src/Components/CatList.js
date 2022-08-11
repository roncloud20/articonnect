 import ArtisanCard from "./ArtisanCard"
//  import Artisan from "./Articonnect"
 const CatList =({art})=>{
    return(
        <div className="catList">
            { art.map((v,i)=>{
                        return <ArtisanCard 
                                        name={art[i].name} 
                                        whatsappno={art[i].whatsappno}
                                        call={art[i].call}
                                        profession={art[i].profession}
                        />
                    })} 
        </div>
    )
 }

 export default CatList;