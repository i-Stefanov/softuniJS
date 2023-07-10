function solve() {
  let stopId = `depot`;
  let info = document.querySelector(`.info`);
  let departBtn = document.querySelector(`#depart`);
  let arriveBtn = document.querySelector(`#arrive`);
  let arriving = ``;
  async function depart() {
    try {
      let response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      let data = await response.json();
      stopId = data.next;
      info.textContent = `Next stop ${data.name}`;
      arriving = data.name;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
      console.log(stopId);
    } catch (error) {
      info.textContent = "error";
      arriveBtn.disabled = true;
      departBtn.disabled = true;
    }
  }

  function arrive() {
    info.textContent = `Arriving at ${arriving}`;
    arriveBtn.disabled = true;
    departBtn.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
