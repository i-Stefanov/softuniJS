function extractText() {
  //select all elements inside the ul with id of items
  const ul = document.querySelectorAll(`#items *`);
  //select the text area
  const textArea = document.querySelector(`#result`);
  // convert the ul nodelist to an array
  let lis = Array.from(ul);
  // loop through the aray and add every li to the text area
  lis.forEach((li) => {
    console.log(li.textContent);
    textArea.textContent += `\n${li.textContent}`;
  });
}
