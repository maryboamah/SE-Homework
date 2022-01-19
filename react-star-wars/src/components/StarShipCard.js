
import FetcData from "./FetchData"

import Nav from "./Nav"

function StarShipCard(){
    const { data } = FetcData("https://swapi.dev/api/starships")
    
  


   return(
   <>
   
   <div className="main">
      
       {data && (
           data.results.map((star,index)=>(
               <div id={`flip-card${index}`} className="flip-card"> 
               <div id={`star${index}`} className="star">
               <div  className = "front" id= {`front${index}`} key={index}>
                   <h2>{star.name}</h2>

               </div>
               <div className="back"  id= {`back${index}`}>
                  <p><span>MODEL:</span> {star.model}</p>
                  <p><span>MANUFACTURER:</span> {star.manufacturer}</p>
                  <p> <span>SPEED:</span> {star.max_atmosphering_speed}</p>
                  <p> <span>CAPACITY:</span> {star.cargo_capacity}</p>
                  <p> <span>RATING:</span>{star.hyperdrive_rating}</p>
                
               </div>
               </div>
               </div>
               
           )

           )

           )
       }

       

       

   </div>
  
   </>)
}
export default StarShipCard