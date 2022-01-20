
import FetcData from "./FetchData"
import { useNavigate } from 'react-router-dom'
function MoreQuestions(){

    let navigate = useNavigate()
    const { data } = FetcData('http://jservice.io/api/random?count=10')
    console.log(data)
    let getAnswer =()=>{
        

        var row1 = document.querySelectorAll(".answer");
        var row2 = document.querySelectorAll(".hide");

        for (let i = 0; i < row1.length; i++) {
          
            row1[i].classList.toggle("hidedetails");
           
         
        }
         
    }


    return(
        <div>

            
<table>
                      <thead>
                          <tr>
                              <th>Question</th>
                              <th>Category</th>
                              <th>Points</th>
                              <th>Answer</th>
                          </tr>
                      </thead>



{data && (
           data.map((jeo,index)=>(
               
               
              <tbody key={index}>
                  {/* <Questions question ={jeo.question} category ={jeo.category.title} points = {jeo.value} answer ={jeo.answer}/> */}

                <tr>
                    <td>{jeo.question}</td>
                    <td>{jeo.category.title}</td>
                    <td>{jeo.value}</td>
                    <td><button  className="hide" onClick={getAnswer}>REVEAL ANSWER</button><span className="answer">{jeo.answer}</span></td>
                    
                </tr>
                 
                  
                  </tbody>
               
           )

           )







           )
       }

</table>
            <button id="tenquestions" onClick={() => {navigate("/")}}>Home</button>
            

        </div>
    )
}
export default MoreQuestions