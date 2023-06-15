function search() {
  const townsEl = document.querySelectorAll(`#towns li:nth-child(n)`);
  let searchText = document.querySelector(`#searchText`);
  const result = document.querySelector(`#result`);
  let matches = 0;
  let towns = Array.from(townsEl);
  towns.forEach((town) => {
    if (
      town.style.textDecoration !== `` &&
      town.style.textDecoration === `underline`
    ) {
      town.style.textDecoration = `none`;
      town.style.fontWeight = `normal`;
    }
    if (
      town.textContent.includes(searchText.value) &&
      searchText.value !== ``
    ) {
      town.style.textDecoration = `underline`;
      town.style.fontWeight = `bold`;
      matches++;
    }
  });

  result.textContent = `${matches} matches found`;
  searchText.value = ``;
  matches = 0;
}
