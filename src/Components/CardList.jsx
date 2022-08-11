import Card from "./Card"
const CardList = ({worker})=>{
    return(
        <div  className='artlist'>
             {
                worker.map((v,i)=>{
                    return < Card
                                            name={worker[i].name} 
                                        whatsappno={worker[i].whatsappno}
                                        call={worker[i].call}
                                        profession={worker[i].profession}
                    />
                })
            }
        </div>
    )
}


export default CardList;