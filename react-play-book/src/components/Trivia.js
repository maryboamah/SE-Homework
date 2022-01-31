import FetchData from "./FetchData";

import { useState, useEffect } from 'react';


function Trivia() {
  let playing = "false";
 
  let action;
  let timeremaining;
  let correctAnswer;

  let [score, setScore] = useState(0)
  let [difficulty, setDifficulty] = useState("easy")
let [category, setCategory ]= useState("")

useEffect(()=>{

  document.getElementById("submitTrivia").onclick = ()=>{
    setCategory(document.getElementById("select1").value)
    setDifficulty(document.getElementById("select2").value)
    
    if(category ==="" || difficulty ==="" ){
      alert("Enter Category or Difficulty or default category will be used")
    }
  }

}, [category, difficulty])
// useEffect(()=>{
//   document.getElementById("submitTrivia").onclick = ()=>{
//     setDifficulty(document.getElementById("select2").value)
//     if(difficulty ===""){
//       alert("Enter Difficulty Level or default level will be used")
//     }
//   }
//   }, [difficulty])


  useEffect(() => {
    
  }, [score])
  let increase =()=>(
    setScore(score++)
  )
 

  const { data } = FetchData(
    `https://opentdb.com/api.php?amount=34&category=${category}&difficulty=${difficulty}&type=multiple`
  );

  const questions = [];
  data &&
    data.results.map((trivia, index) => (
      <div key={index}>
        <p>{questions.push(trivia)}</p>
      </div>
    ));
console.log(questions.length)
  let count = questions.length -1;
 
  //start to play
  let startPlay = () => {

   if(playing === false){
     window.location.reload()
   }else{

   playing = true
   stopCountdown()
   score =0

    //hide game over if present
    hide("game-over");
    // startCountdown();
    show("time-remaining");

       //set timeremaining to 60sec
       timeremaining = 60
      
         
    //set score to 0
    score =0


    //show score
    document.getElementById("score-value").innerHTML = score;

   
    document.getElementById("time-remaining-value").innerHTML = timeremaining;
    //change start button to reset
    document.getElementById("start-reset").innerHTML = "Reset";
    //start countdown
    startCountdown();

    getQuestionsAndANswers();
    checkAnswers("box1");
    checkAnswers("box2");
    checkAnswers("box3");
    checkAnswers("box4");
    console.log(checkAnswers('box1'))
   
   }
    
  };
  

  //start countdown
  function startCountdown() {
    action = setInterval(function () {
      timeremaining -= 1;
      document.getElementById("time-remaining-value").innerHTML = timeremaining;
      if (timeremaining === 0) {
        //game over
        stopCountdown();
        show("game-over");
        document.getElementById(
          "game-over"
        ).innerHTML = `<p>Game Over! You answered ${count}</p><p>Your Score is ${score}</p>`;
        hide("time-remaining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("start-reset").innerHTML = "Start Game";
       
        

      }
    }, 1000);

    
  }

  //Stops the countdown
  function stopCountdown() {
    clearInterval(action);
   
  }


  //Reset Game with Reset button

 let  reset = ()=>{
    window.location.reload () 
  }


  // hide display
  function hide(id) {
    document.getElementById(id).style.display = "none";
  }

  //takes any document id and change style to block
  function show(id) {
    document.getElementById(id).style.display = "block";
  }

  //generate 10 questions and answers
  let getQuestionsAndANswers = () => {
   playing = true
    // startCountdown();
    
    //Get questions and put them in the questions html with start button click

    if(count >= 0){
    

        document.getElementById("question").innerHTML = questions[count].question;

    count--;

       //show countdown box
       
//     if (count<=0){
//         // count=questions.length-1;
//    count = document.getElementById(
//         "game-over"
//       ).innerHTML = `<p>Game Over!</p><p>Your Score is ${score}</p>`}

    

    //get correct answer from api and store it in the correct answer var
     correctAnswer = questions[count + 1].correct_answer;

    //get array of wron answers and store them in the wrong answer variable
    let wrongAnswers = questions[count + 1].incorrect_answers;

   

    //put all answers in their respective boxes by randomly asiging them
    //first set a random position for the correct answer
    let correctAnswerPos = 1 + Math.round(3 * Math.random());

    //   fill one of the three boxes with the correct answer

    

    //put other wrong answers in the rest of the boxes

    for (let i = 1; i <= 4; i++) {
      if (i !== correctAnswerPos && i < 4) {
        
        // console.log(wrongAnswers[i-1])
       
        document.getElementById("box" + i).innerHTML = wrongAnswers[i - 1];


        //    console.log( document.getElementById('box' + (i +1)).innerHTML = questions[count].incorrect_answers[i])
        console.log("box" + i);
      } else if (i !== correctAnswerPos && i === 4) {
        document.getElementById("box" + i).innerHTML =
          wrongAnswers[correctAnswerPos - 1];
      }
    }

    document.getElementById("box" + correctAnswerPos).innerHTML = correctAnswer;
   

    }else{
       
        show('game-over')
        document.getElementById(
          "game-over"
        ).innerHTML = `<p>Game Over! You answered ${count}</p><p>Your Score is ${score}</p>`;
        hide("time-remaining");
    
        // window.location.reload () 
    }



  
    
    
}



//check answers for correct Answer

function checkAnswers (id){
   document.getElementById(id).onclick = function(){
if(playing ===  true){
if(this.innerHTML === correctAnswer){
  increase()
  
  document.getElementById("score-value").innerHTML = score;
  hide("wrong");
  show("correct");
  setTimeout(function(){
    hide("correct");
},1000);
getQuestionsAndANswers()

}else{
  hide("correct");
  show("wrong");
  setTimeout(function(){
      hide("wrong");
  },1000);

}
}
   }

   
}

// checkAnswers("box1");
// checkAnswers("box2");
// checkAnswers("box3");
// checkAnswers("box4");
  return (
    <div className="trivia">

<div className="selectoptions">
  <fieldset>
 
      <div id="searchTrivia"> <select id="select1">
      
        <option value = ""> ...Select Category..  
                </option>  
            <option value = "inauthor"> Books  
            </option>  
            <option value = "intitle"> Film
            </option>  
            <option value = "inpublisher"> Computers 
            </option>  
            <option value = "subject">Mathematics
            </option>  
          
        <option value = "isbn"> Sports </option>  
        <option value = "isbn"> History  </option>  
        <option value = "isbn"> Arts </option>  
        <option value = "isbn"> Animals </option>  
        <option value = "isbn"> Geography </option> 
        <option value = "isbn"> Politics </option> 
        </select>
        <select id="select2">
     
        <option value = ""> ...Select Dificulty Level..  
                </option>  
            <option value = "easy"> Easy 
            </option>  
            <option value = "imedium"> Medium 
            </option>  
            <option value = "ihard"> Hard
            </option>  
              
        </select>
        
        
        <button type="submit" id="submitTrivia">Submit</button>
        
        </div>
        </fieldset>
      </div>

      <div id="container">
        <button id="nextquestion" onClick={reset} >Reset</button>
        <div id="score">
          Score:<span id="score-value">0</span>{" "}
        </div>
        <div id="correct">Correct</div>
        <div id="wrong">Try again</div>
        <div id="question"></div>
        <div id="instruction">Click on the correct Answer</div>
        <div id="choices">
          <div id="box1" className="box" ></div>
          <div id="box2" className="box" ></div>
          <div id="box3" className="box" ></div>
          <div id="box4" className="box" ></div>
        </div>
        <div id="start-reset" onClick={startPlay}>
          Start Game
        </div>
        <div id="time-remaining">
          Time remaining:<span id="time-remaining-value"></span>
        </div>
        <div id="game-over"></div>
      </div>
      
      <div className="displayFeedBack">
        
      </div>
    </div>
  );
}
export default Trivia;
