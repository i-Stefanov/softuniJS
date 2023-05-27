function solve() {
  const [items, cart] = Array.from(document.querySelectorAll(`textarea`));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll(`button`));
  const tbody = document.querySelector(`tbody`);
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
  generateBtn.addEventListener(`click`, generate);
  function generate() {
    const products = JSON.parse(items.value);
    products.forEach((product) => {
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
    });
  }
}
// [
//   {
//     name: "Sofa",
//     img: "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
//     price: 150,
//     decFactor: 1.2,
//   },
// ];
