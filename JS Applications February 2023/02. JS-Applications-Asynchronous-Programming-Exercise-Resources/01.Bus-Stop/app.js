async function getInfo() {
  const value = document.querySelector("#stopId").value;
  const stopNameElement = document.querySelector("#stopName");
  const ulElement = document.querySelector("#buses");
  const button = document.querySelector('#submit')

  const url = `http://localhost:3030/jsonstore/bus/businfo/${value}`;

  try {
    
    stopNameElement.textContent = "Loading...";
    ulElement.replaceChildren();
    const res = await (await fetch(url)).json();
    stopNameElement.textContent = res.name;

    let buses = Object.keys(res.buses);

    for (const bus of buses) {
      let liElement = document.createElement("li");
      liElement.textContent = `Bus ${bus} arrives in ${res.buses[bus]} minutes`;
      ulElement.appendChild(liElement);
    }
  } catch (error) {
    stopNameElement.textContent = "Error";
  }
}


//         with .then .catch


// function getInfo() {
//     let submitBtn = document.getElementById('submit');
//     let busList = document.getElementById('buses');
//     let stop = document.getElementById('stopName');
 
//     submitBtn.addEventListener('click', () => {
//         let idVal = document.getElementById('stopId').value;
//         let url = `http://localhost:3030/jsonstore/bus/businfo/${idVal}`;
 
 
//         fetch(url)
//             .then(data => data.json())
//             .catch(err => {stop.textContent = 'Error'})
//             .then(data => {
//                 stop.textContent = '';
//                 busList.innerHTML = '';
//                 stop.textContent = data.name;
//                 for (entry in data.buses) {
//                     let listEl= document.createElement('li');
//                     listEl.textContent = `Bus ${entry} arrives in ${data.buses[entry]} minutes`
//                     busList.appendChild(listEl);
//                 }
 
//             })
//             // Not sure if this catch is needed, but want to make sure that we don't have invalid entry in bus.json
//             .catch(err => {stop.textContent = 'Error'})
 
 
//     })
// }