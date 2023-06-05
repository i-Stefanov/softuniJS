function solve() {
  const [items, boughtFurniture] = Array.from(
    document.querySelectorAll(`textarea`)
  );
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll(`button`));

  generateBtn.addEventListener(`click`, generate);
  buyBtn.addEventListener(`click`, addToBought);

  function addToBought() {
    const checkboxes = Array.from(
      document.querySelectorAll(`input[type="checkbox"]`)
    );
    let totalPrice = 0;
    let decFacs = [];
    let decFacAvg = 0;
    let itemsBought = [];
    checkboxes.forEach((check) => {
      if (check.disabled === false) {
        if (check.checked) {
          let itemInfo = check.parentElement.parentElement;
          let itemName = itemInfo.querySelector(`tr :nth-child(2)`).textContent;
          let price = Number(
            itemInfo.querySelector(`tr :nth-child(3)`).textContent
          );
          let decFac = Number(
            itemInfo.querySelector(`tr :nth-child(4)`).textContent
          );
          itemsBought.push(itemName);
          totalPrice += price;
          decFacs.push(decFac);
          decFacAvg =
            decFacs.reduce((acc, decFacVal) => {
              return acc + decFacVal;
            }, 0) / decFacs.length;
        }
      }
    });
    boughtFurniture.value = `Bought furniture: ${itemsBought.join(
      `, `
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${decFacAvg}`;
  }
  function generate() {
    const tbody = document.querySelector(`tbody`);

    const products = JSON.parse(items.value);
    for (const product of products) {
      let tr = document.createElement(`tr`);
      let tdImg = document.createElement(`td`);
      let tdName = document.createElement(`td`);
      let tdPrice = document.createElement(`td`);
      let tdDecFactor = document.createElement(`td`);
      let tdCheckbox = document.createElement(`td`);
      let pName = document.createElement(`p`);
      let pPrice = document.createElement(`p`);
      let pDecFactor = document.createElement(`p`);
      let img = document.createElement(`img`);
      let checkbox = document.createElement(`input`);
      checkbox.type = `checkbox`;
      // console.log(product);
      img.src = product.img;
      pName.textContent = product.name;
      pPrice.textContent = product.price;
      pDecFactor.textContent = product.decFactor;
      tdImg.appendChild(img);
      tdName.appendChild(pName);
      tdPrice.appendChild(pPrice);
      tdDecFactor.appendChild(pDecFactor);
      tdCheckbox.appendChild(checkbox);
      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecFactor);
      tr.appendChild(tdCheckbox);
      tbody.appendChild(tr);
    }
  }
}
