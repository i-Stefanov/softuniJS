window.addEventListener("load", solve);

function solve() {
  const modelField = document.querySelector(`#car-model`);
  const yearField = document.querySelector(`#car-year`);
  const partNameField = document.querySelector(`#part-name`);
  const partNumberField = document.querySelector(`#part-number`);
  const conditionField = document.querySelector(`#condition`);
  const nextBtn = document.querySelector(`#next-btn`);
  const infoList = document.querySelector(`.info-list`);
  const completeImg = document.querySelector(`#complete-img`);
  const completeText = document.querySelector(`#complete-text`);
  const confirmList = document.querySelector(`.confirm-list`);
  nextBtn.addEventListener(`click`, nextFn);

  function nextFn(e) {
    e.preventDefault();

    if (
      !modelField.value ||
      !yearField.value ||
      !partNameField.value ||
      !partNumberField.value ||
      !conditionField.value ||
      Number(yearField.value) < 1980 ||
      Number(yearField.value) > 2023
    ) {
      return;
    }
    //1.Getting the information from the form and creating elements
    const liElement = document.createElement(`li`);
    liElement.classList.add(`part-content`);
    let articleEl = document.createElement(`article`);
    let pModel = document.createElement(`p`);
    let pYear = document.createElement(`p`);
    let pPartName = document.createElement(`p`);
    let pPartNumber = document.createElement(`p`);
    let pCondition = document.createElement(`p`);
    let editBtn = document.createElement(`button`);
    editBtn.textContent = `Edit`;
    editBtn.classList.add(`edit-btn`);

    editBtn.addEventListener(`click`, editFun);

    let continueBtn = document.createElement(`button`);
    continueBtn.textContent = `Continue`;
    continueBtn.classList.add(`continue-btn`);

    continueBtn.addEventListener(`click`, continueFun);

    pModel.textContent = `Car Model: ${modelField.value}`;
    pYear.textContent = `Car year: ${yearField.value}`;
    pPartName.textContent = `Part Name: ${partNameField.value}`;
    pPartNumber.textContent = `Part Number: ${partNumberField.value}`;
    pCondition.textContent = `Condition: ${conditionField.value}`;
    articleEl.appendChild(pModel);
    articleEl.appendChild(pYear);
    articleEl.appendChild(pPartName);
    articleEl.appendChild(pPartNumber);
    articleEl.appendChild(pCondition);
    liElement.appendChild(articleEl);
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);
    infoList.appendChild(liElement);
    completeImg.computedStyleMap.visibility = "hidden";
    completeText.textContent = "";

    modelField.value = ``;
    yearField.value = ``;
    partNameField.value = ``;
    partNumberField.value = ``;
    conditionField.value = ``;
    nextBtn.disabled = true;
    function editFun(e) {
      e.target.parentElement.remove();
      modelField.value = pModel.textContent.substring(11);
      yearField.value = pYear.textContent.substring(10);
      partNameField.value = pPartName.textContent.substring(11);
      partNumberField.value = pPartNumber.textContent.substring(13);
      conditionField.value = pCondition.textContent.substring(11);
      while (infoList.lastElementChild) {
        infoList.removeChild(infoList.lastElementChild);
      }
      nextBtn.disabled = false;
    }
    function continueFun(e) {
      const liElement = e.target.parentElement;
      liElement.removeChild(editBtn);
      liElement.removeChild(continueBtn);
      liElement.remove();
      let confirmBtn = document.createElement(`button`);
      confirmBtn.classList.add(`confirm-btn`);
      confirmBtn.textContent = `Confirm`;
      let cancelBtn = document.createElement(`button`);
      cancelBtn.classList.add(`cancel-btn`);
      cancelBtn.textContent = `Cancel`;
      liElement.appendChild(confirmBtn);
      liElement.appendChild(cancelBtn);
      confirmList.appendChild(liElement);
      confirmBtn.addEventListener(`click`, confirmFn);
      cancelBtn.addEventListener(`click`, cancelFn);
      function confirmFn(e) {
        console.log(e.target);
        e.taret.parentElement.remove();
        nextBtn.disabled = false;
        completeImg.computedStyleMap.visibility = "visible";
        completeText.textContent = "Part is Ordered!";
      }
      function cancelFn(e) {
        e.target.parentElement.remove();
        nextBtn.disabled = `false`;
      }
    }
  }
}
