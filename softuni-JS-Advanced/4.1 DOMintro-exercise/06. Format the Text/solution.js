function solve() {
  const input = document.querySelector(`#input`).value;
  let output = document.querySelector(`#output`);
  output.innerHTML = ``;
  let sentences = input.split(`.`).filter((s) => s !== "");

  // console.log(input);
  // console.log(sentences);
  while (sentences.length > 0) {
    let sentencesToPutInParagraph = sentences.splice(0, 3);
    output.innerHTML += `<p>${sentencesToPutInParagraph.join(`.`)}.</p>`;
  }
}
