function solve() {

  let firstStop = "depot";
  const infoElement = document.querySelector("#info span");
  const departbtn = document.querySelector("#depart");
  const arrivebtn = document.querySelector("#arrive");

  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${firstStop}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let currentStop = data.name;
    infoElement.textContent = `Next stop ${currentStop}`;

    departbtn.disabled = true;
    arrivebtn.disabled = false;
  }

  async function arrive() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${firstStop}`;

    const response = await fetch(url);
    const data = await response.json();
    firstStop = data.next;
    infoElement.textContent = `Arriving at ${data.name}`;


    departbtn.disabled = false;
    arrivebtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
