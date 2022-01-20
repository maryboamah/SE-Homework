import FetcData from "./FetchData"
import Questions from "./Questions"
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
function Main(){
    let navigate = useNavigate()
    const { data } = FetcData("http://jservice.io/api/random")
    console.log(data)



    return(
        <div>

            




{data && (
           data.map((jeo,index)=>(
               
               
              <div key={index}>
                  <Questions question ={jeo.question} category ={jeo.category.title} points = {jeo.value} answer ={jeo.answer}/>
                  
              </div>
               
           )

           )







           )
       }

           <Link to='more'>
            <button id="tenquestions" onClick={() => {navigate("/more")}}>Get 10 Questions</button>
            </Link>

        </div>
    )
}

export default Main