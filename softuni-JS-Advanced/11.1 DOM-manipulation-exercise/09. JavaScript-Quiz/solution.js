function solve() {
  const answers = Array.from(document.querySelectorAll(`.answer-text`));
  let correctAnswersCounter = 0;
  let sections = Array.from(document.querySelectorAll(`section`));
  let index = 0;
  const correctAnswers = [
    `onclick`,
    `JSON.stringify()`,
    `A programming API for HTML and XML documents`,
  ];
  answers.forEach((answer) => {
    answer.addEventListener(`click`, answered);
  });
  function answered(e) {
    let answerClicked = e.target.textContent;
    if (correctAnswers.includes(answerClicked)) {
      correctAnswersCounter++;
      console.log(correctAnswersCounter);
    }
    console.log(sections[index]);
    sections[index].style.display = `none`;
    index++;
    index !== 3
      ? (sections[index].style.display = `block`)
      : displayResult(correctAnswersCounter);
  }
  function displayResult(points) {
    let result = document.querySelector(`#results h1`);
    document.querySelector(`#results`).style.display = `block`;

    if (points === sections.length) {
      result.textContent = `You are recognized as top JavaScript fan!`;
    } else {
      result.textContent = `You have ${correctAnswersCounter} right answers`;
    }
  }
}
