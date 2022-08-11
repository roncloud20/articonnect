import Artisan from "./Articonnect"

   const Look =()=>{
    return(

        <div>
            {
                // SortArtisan =()=>{
                //     return(Artisan.sort((a,b)=>{
                //         a.prof - b.prof
                //     }))
                // }
                Artisan.prof.filter((v,i)=>{
                    return (Artisan[i].prof).includes(Artisan.prof)
                })
            }
        </div>
       
    )
   }


   export default Look;