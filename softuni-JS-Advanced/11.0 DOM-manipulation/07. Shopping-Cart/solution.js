function solve() {
  const textArea = document.querySelector(`textarea`);
  const addProductButtons = Array.from(
    document.querySelectorAll(`.add-product`)
  );
  const checkoutButton = document.querySelector(`.checkout`);
  const prices = Array.from(document.querySelectorAll(`.product-line-price`));
  const names = Array.from(document.querySelectorAll(`.product-title`));
  let cartObj = {};
  let totalPrice = 0;
  addProductButtons.forEach((addButton, i) => {
    addButton.addEventListener(`click`, () => {
      let stringToAppend = `Added ${names[i].textContent} for ${Number(
        prices[i].textContent
      ).toFixed(2)} to the cart.\n`;
      textArea.value += stringToAppend;
      if (!cartObj.hasOwnProperty(names[i].textContent)) {
        cartObj[names[i].textContent] = Number(prices[i].textContent);
      } else {
        cartObj[names[i].textContent] += Number(prices[i].textContent);
      }
      console.log(cartObj);
    });
  });
  checkoutButton.addEventListener(`click`, () => {
    console.log(Object.values(cartObj));
    totalPrice = Object.values(cartObj).reduce((acc, value) => {
      return acc + value;
    }, 0);
    let checkoutString = `You bought ${Object.keys(cartObj).join(
      `, `
    )} for ${totalPrice.toFixed(2)}.`;
    textArea.value += checkoutString;
    addProductButtons.forEach((button) => {
      button.disabled = true;
    });
    checkoutButton.disabled = true;
  });
}
