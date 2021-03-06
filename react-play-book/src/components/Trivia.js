import FetchData from "./FetchData";
import axios from 'axios';
import { useState, useEffect } from "react";
import React, { useRef } from "react";

function Trivia() {
  let playing = "false";

  let action;
  let timeremaining;
  let correctAnswer;

  const [data, setData] = useState(null);
  const [category, setcategory] = useState('9');
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(`https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=multiple`);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [difficulty,category]);


  let getValue =()=>{
    let newCategory = document.getElementById("select1").value
    let newDifficulty = document.getElementById("select2").value
    setcategory(newCategory)
    setDifficulty(newDifficulty)
  }

  let [score, setScore] = useState(0);
// useeefecet for score
  useEffect(() => {}, [score]);
  let increase = () => setScore(score++);
  
  // const { data } = FetchData(
  //   `https://opentdb.com/api.php?amount=15&category=10&difficulty=easy&type=multiple`
  // );

  // console.log(category)
  // console.log(difficulty)
  const questions = [];
  data &&
    data.results.map((trivia, index) => (
      <div key={index}>
        <p>{questions.push(trivia)}</p>
      </div>
    ));
  // console.log(myUrl)
  console.log(questions.length);
  let count = questions.length - 1;

  //start to play
  let startPlay = () => {
    if (playing === false) {
      window.location.reload();
    } else {
      playing = true;
      stopCountdown();
      score = 0;

      //hide game over if present
      hide("game-over");
      // startCountdown();
      show("time-remaining");

      //set timeremaining to 60sec
      timeremaining = 60;

      //set score to 0
      score = 0;

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
      console.log(checkAnswers("box1"));
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

  let reset = () => {
    window.location.reload();
  };

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
    playing = true;
    // startCountdown();

    //Get questions and put them in the questions html with start button click

    if (count >= 0) {
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

      document.getElementById("box" + correctAnswerPos).innerHTML =
        correctAnswer;
    } else {
      show("game-over");
      document.getElementById(
        "game-over"
      ).innerHTML = `<p>Game Over nothing! You answered ${count}</p><p>Your Score is ${score}</p>`;
      hide("time-remaining");

      // window.location.reload ()
    }
  };

  //check answers for correct Answer

  function checkAnswers(id) {
    document.getElementById(id).onclick = function () {
      if (playing === true) {
        if (this.innerHTML === correctAnswer) {
          increase();

          document.getElementById("score-value").innerHTML = score;
          hide("wrong");
          show("correct");
          setTimeout(function () {
            hide("correct");
          }, 1000);
          getQuestionsAndANswers();
        } else {
          hide("correct");
          show("wrong");
          setTimeout(function () {
            hide("wrong");
          }, 1000);
        }
      }
    };
  }

  // checkAnswers("box1");
  // checkAnswers("box2");
  // checkAnswers("box3");
  // checkAnswers("box4");
  return (
    <div className="trivia">
      <div className="selectoptions">
        <fieldset>
          <div id="searchTrivia">
            {" "}
            <select id="select1">
              <option value=""> ...Select Category..</option>
              <option value="10"> Books</option>
              <option value="11"> Film</option>
              <option value="18"> Computers</option>
              <option value="19">Mathematics</option>

              <option value="21"> Sports </option>
              <option value="23"> History </option>
              <option value="25"> Arts </option>
              <option value="27"> Animals </option>
              <option value="22"> Geography </option>
              <option value="24"> Politics </option>
              <option value="26"> Celebrities </option>
            </select>
            <select id="select2">
              <option value=""> ...Select Dificulty Level..</option>
              <option value="easy"> Easy</option>
              <option value="medium"> Medium</option>
              <option value="hard"> Hard</option>
            </select>
            <button type="submit" id="submitTrivia" onClick={getValue}> 
              Submit
            </button>
          </div>
        </fieldset>
      </div>

      <div id="container">
        <button id="nextquestion" onClick={reset}>
          Reset
        </button>
        <div id="score">
          Score:<span id="score-value">0</span>{" "}
        </div>
        <div id="correct">Correct</div>
        <div id="wrong">Try again</div>
        <div id="question"></div>
        <div id="instruction">Click on the correct Answer</div>
        <div id="choices">
          <div id="box1" className="box"></div>
          <div id="box2" className="box"></div>
          <div id="box3" className="box"></div>
          <div id="box4" className="box"></div>
        </div>
        <div id="start-reset" onClick={startPlay}>
          Start Game
        </div>
        <div id="time-remaining">
          Time remaining:<span id="time-remaining-value"></span>
        </div>
        <div id="game-over"></div>
      </div>

      <div className="displayFeedBack"></div>
    </div>
  );
}
export default Trivia;
