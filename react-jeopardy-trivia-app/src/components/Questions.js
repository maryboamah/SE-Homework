
import { useState, useEffect } from 'react';
function Questions(props){
  
    let  getQuestions =()=>{
        // Location.reload();
       
      document.getElementById("question").innerText = `Question: ${props.question}` 
       document.getElementById("answer").innerText =  `Answer: ${props.answer}`
       document.getElementById("category").innerText =  `Category: ${props.category}`
       document.getElementById("points").innerText =  `Points: ${props.points}`
    
    }


    let getAnswer =()=>{
        return document.getElementById("answer").style.display = 'block'
    }

    let [score, setScore] = useState(0) 
   
  
    useEffect(() => {
    
      }, [score])
    
      const increase= () => setScore(score => score + props.points)   
    
      const decrease = () => setScore(score - props.points)
    
      const reset = () => setScore(0)

    

  
    return(<div>
         <h3>Score:<span>{score}</span></h3>
        <button onClick={increase} id='increase'>Increase</button>
            <button onClick={decrease} id='decrease'>Decrease</button>
            <button onClick={reset} id='reset'>Reset</button>
            <h3>Lets Play</h3>
        
        <button onClick={getQuestions}>
            Get Questions
        </button>
        <div id="question"></div>
        
        <div id="category"></div>
        <div id="points"></div>
        <button onClick={getAnswer}>REVEAL ANSWER</button>
        <div id="answer">Reveal Answer</div>
        
    </div>)
}
export default Questions