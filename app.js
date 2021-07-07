var quizQA = [{
  question: "How To Initialize An Alert Box In JavaScript",
  ans1: "alert = open",
  ans2: "alert.value = alert",
  ans3: "(alert)",
  ans4: "alert()",
  ans: "alert()"
},
  {
    question: "What does var Key Word DO in javascript?",
    ans1: "Give The Voranty Of Element",
    ans2: "Stores Deferent Type Of Information",
    ans3: "Do Nothing",
    ans4: "None Of These",
    ans: "Stores Deferent Type Of Information"
  },
  {
    question: "How To Store Information In var",
    ans1: "var information = ''",
    ans2: "var = information ''",
    ans3: "information.var('')",
    ans4: "None Of above",
    ans: "var information = ''"
  },
  {
    question: "What Will be the answer of 2+3 / 5 in JavaScript",
    ans1: "0",
    ans2: "1.2",
    ans3: "2",
    ans4: "3",
    ans: "1.2"
  },
  {
    question: "What does 'if' statment do in javascript",
    ans1: "It Checks The Condition Then run the code",
    ans2: "it will do nothing",
    ans3: "It run the code then check condition",
    ans4: "It Repeats the code again and again",
    ans: "It Checks The Condition Then run the code"
  },
  {
    question: "What is correnct synyax for if statment",
    ans1: "if = checkCondition",
    ans2: "if{condition ===  ''}()",
    ans3: "if(condition is equal to 'match'){}",
    ans4: "if(condition === ''){}",
    ans: "if(condition === ''){}"
  },
  {
    question: "which symbol is used for checking multiple conditions",
    ans1: "**",
    ans2: "!!",
    ans3: "||",
    ans4: "&^",
    ans: "||"
  },
  {
    question: "How does for loop works",
    ans1: "updation, decleration, validation",
    ans2: "decleration, validation, updation",
    ans3: "validation, updation, updation",
    ans4: "none of these",
    ans: "decleration, validation, updation"
  },
  {
    question: "Javascript is a",
    ans1: "programming language",
    ans2: "Hyper text markup language",
    ans3: "Cascading Style Sheet",
    ans4: "All Of these",
    ans: "programming language"
  },
  {
    question: "How to get day of month",
    ans1: "getMonth.day()",
    ans2: "getDay()",
    ans3: "getDate()",
    ans4: "DayOfMonth.com",
    ans: "getDay()"
  }]

var questionNo = 0;
var score = 0;
var indexPage = document.getElementById("indexCode");
var questionsPage = document.getElementById("questionCode");
var resultPage = document.getElementById("resultCode");
if (indexPage.style.display != "none") {
  questionsPage.style.display = "none";
  resultPage.style.display = "none";
}
var userName = document.getElementById("nameInput")
var question = document.getElementById('question')
var ans1Value = document.getElementById("radio1")
var ans1Print = document.getElementById("ans1")
var ans2Value = document.getElementById("radio2")
var ans2Print = document.getElementById("ans2")
var ans3Value = document.getElementById("radio3")
var ans3Print = document.getElementById("ans3")
var ans4Value = document.getElementById("radio4")
var ans4Print = document.getElementById("ans4")
var resultName = document.getElementById("resultName");
var resultTotalScore = document.getElementById("totalScore");
var resultUserScore = document.getElementById("userScore");

function questionLoader() {
  if(userName.value === ""){
    userName.setAttribute("placeholder","Please enter your name")
    userName.classList.add("red")
  }
else{
  if (indexPage.style.display != "none") {
    document.getElementById('timer').innerHTML =
  02     + ":" + 60;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  if(s==0 && m==0){
    questionsPage.style.display = "none"
    resultPage.style.display = "block"
    resultName.innerText = userName.value
    resultTotalScore.innerText = "100"
    resultUserScore.innerText = score
  }
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
    indexPage.style.display = "none";
    questionsPage.style.display = "block";
  }
  question.innerText = "Q) " + quizQA[questionNo].question
  ans1Value.value = quizQA[questionNo].ans1
  ans1Print.innerText = 'a) ' + quizQA[questionNo].ans1
  ans2Value.value = quizQA[questionNo].ans2
  ans2Print.innerText = 'b) ' + quizQA[questionNo].ans2
  ans3Value.value = quizQA[questionNo].ans3
  ans3Print.innerText = 'c) ' + quizQA[questionNo].ans3
  ans4Value.value = quizQA[questionNo].ans4
  ans4Print.innerText = 'd) ' + quizQA[questionNo].ans4

}
}

function ansChecker() {
  var options = document.getElementsByName("answer")
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      if (options[i].value === quizQA[questionNo].ans) {
        score += 10;
        console.log(score)
      }
      options[i].checked = false;
      // console.log(questionNo)
      questionLoader()
      if (questionNo == 8) {
        document.getElementById("submitBtn").innerText = "Submit";
      }
      if (questionNo < 9) {
        questionNo++
        questionLoader()
      } else {
        questionsPage.style.display = "none";
        resultPage.style.display = "block";
        resultName.innerText = userName.value
        resultTotalScore.innerText = "100"
        resultUserScore.innerText = score
      }
    }
  }
}

