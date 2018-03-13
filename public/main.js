// import { clearImmediate } from "timers";

// let team1Name = "Team 1";
// let team1Score = 0;

// let team2Name = "Team2";
// let team2Score = 0;

const main = () => {
  // // select the team 1 add button
  // let button = document.querySelector(".button1");
  // console.log(button);
  // // give it a click handler (a function)
  // //  
  // button.addEventListener("click", (event) => {
  //   team1Score += 1;
  //   console.log(team1Score);
  // });
  const team1Name = "Team 1";
  let team1Score = 0;

  const team2Name = "Team2";
  let team2Score = 0;

  const mybutton = document.querySelector(".button1");
  const myscore1 = document.querySelector(".team1-result .team1");
  const myscore2 = document.querySelector(".team2-result .team2");

  mybutton.textContent = "Increase by one";
  console.log(mybutton);

  mybutton.addEventListener("click", (event) => {
      team1Score += 1;
      console.log(team1Score);
  });
  // in that handler,
  //    increment the score for that team
  //    find the element with score and update it to the new score
}

document.addEventListener('DOMContentLoaded', main)
