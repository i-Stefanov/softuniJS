window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.querySelector(`#publish`);
  const makeField = document.querySelector(`#make`);
  const modelField = document.querySelector(`#model`);
  const yearField = document.querySelector(`#year`);
  const originalCost = document.querySelector(`#original-cost`);
  const fuelType = document.querySelector(`#fuel`);
  const sellingPrice = document.querySelector(`#selling-price`);
  const tableBody = document.querySelector(`#table-body`);
  const soldCars = document.querySelector(`#cars-list`);
  const profitElement = document.querySelector(`#profit`);
  let totalProfit = 0;
  publishBtn.addEventListener(`click`, addElemetns);
  function addElemetns(e) {
    e.preventDefault();
    if (
      !makeField.value ||
      !modelField.value ||
      !yearField.value ||
      !sellingPrice.value ||
      !originalCost.value ||
      !fuelType.value ||
      sellingPrice.value <= originalCost.value
    ) {
      return;
    }
    const tr = document.createElement(`tr`);
    tr.classList.add(`row`);
    const tdMake = document.createElement(`td`);
    const tdModel = document.createElement(`td`);
    const tdYear = document.createElement(`td`);
    const tdFuel = document.createElement(`td`);
    const tdOriginalCost = document.createElement(`td`);
    const tdSellingPrice = document.createElement(`td`);
    const tdBtns = document.createElement(`td`);
    const editBtn = document.createElement(`button`);
    editBtn.classList.add(`action-btn`, `edit`);
    editBtn.textContent = "Edit";
    const sellBtn = document.createElement(`button`);
    sellBtn.classList.add(`action-btn`, `sell`);
    sellBtn.textContent = "Sell";
    editBtn.addEventListener(`click`, editFn);
    sellBtn.addEventListener(`click`, sellFn);
    tdMake.textContent = makeField.value;
    tdModel.textContent = modelField.value;
    tdYear.textContent = yearField.value;
    tdFuel.textContent = fuelType.value;
    tdOriginalCost.textContent = originalCost.value;
    tdSellingPrice.textContent = sellingPrice.value;
    tdBtns.appendChild(editBtn);
    tdBtns.appendChild(sellBtn);
    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdBtns);
    tableBody.appendChild(tr);
    makeField.value = ``;
    modelField.value = ``;
    yearField.value = ``;
    originalCost.value = ``;
    sellingPrice.value = ``;
    function editFn(e) {
      let car = e.target.parentElement.parentElement;
      console.log(car);
      car.remove();
      makeField.value = tdMake.textContent;
      modelField.value = tdModel.textContent;
      yearField.value = tdYear.textContent;
      fuelType.value = tdFuel.textContent;
      originalCost.value = tdOriginalCost.textContent;
      sellingPrice.value = tdSellingPrice.textContent;
    }
    function sellFn(e) {
      let car = e.target.parentElement.parentElement;
      car.remove();

      let liElement = document.createElement(`li`);
      liElement.classList.add(`each-list`);
      let makeAndModelSpan = document.createElement(`span`);
      let yearSpan = document.createElement(`span`);
      let profitSpan = document.createElement(`span`);
      makeAndModelSpan.textContent = `${tdMake.textContent} ${tdModel.textContent}`;
      yearSpan.textContent = tdYear.textContent;
      let profit =
        Number(tdSellingPrice.textContent) - Number(tdOriginalCost.textContent);
      profitSpan.textContent = profit;
      totalProfit += profit;
      liElement.appendChild(makeAndModelSpan);
      liElement.appendChild(yearSpan);
      liElement.appendChild(profitSpan);
      soldCars.appendChild(liElement);

      profitElement.textContent = totalProfit.toFixed(2);
    }
  }
}
