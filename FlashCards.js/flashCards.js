function FlashCard(question, answer) {
  this.question = question;
  this.answer = answer;
}
function myFunction() {
  const ques = document.getElementById(`question`).value;
  const ans = document.getElementById(`answer`).value;
  const fC = new FlashCard(ques, ans);
  createCard(fC);
  console.log(ques, ans);
}


function createCard(fC) {
  const savedCard0 = document.getElementById("question1");
  const savedCard1 = document.getElementById("answer1");
  savedCard0.innerHTML = fC.question;
  savedCard1.innerHTML = fC.answer;
  
  
};









