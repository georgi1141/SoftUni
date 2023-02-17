window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.querySelector("#add");
    const furnitureList = document.querySelector("#furniture-list");
    //Input fields on the  table
    const modelElement = document.querySelector("#model");
    const yearElement = document.querySelector("#year");
    const descriptionElement = document.querySelector("#description");
    const priceElement = document.querySelector("#price");

    addBtnElement.addEventListener("click", (event) => {
        event.preventDefault();

        let year = Number(yearElement.value);
        let price = Number(priceElement.value);
        let model = modelElement.value;
        let description = descriptionElement.value;

        if (!model || !description) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }

        const tableRowElement = document.createElement("tr");
        const modelCellElement = document.createElement("td");
        const priceCellElement = document.createElement("td");
        const actionCellElements = document.createElement("td");
        const moreinfoElement = document.createElement("button");
        const buyitElement = document.createElement("button");

        moreinfoElement.classList.add("moreBtn");
        buyitElement.classList.add("buyBtn");
        tableRowElement.classList.add("info");

        buyitElement.textContent = "Buy it";
        moreinfoElement.textContent = "More Info";
        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        actionCellElements.appendChild(moreinfoElement);
        actionCellElements.appendChild(buyitElement);
        tableRowElement.appendChild(modelCellElement);
        tableRowElement.appendChild(priceCellElement);
        tableRowElement.appendChild(actionCellElements);

        furnitureList.appendChild(tableRowElement);

        //add additional info line

        const infoRowElement = document.createElement("tr");
        infoRowElement.classList.add("hide");
        infoRowElement.style.display = "none";
        const yearDataElement = document.createElement("td");
        yearDataElement.textContent = `Year: ${year}`;
        const descriptionDataElement = document.createElement("td");

        descriptionDataElement.textContent = `Description: ${description}`;
        infoRowElement.appendChild(yearDataElement);
        infoRowElement.appendChild(descriptionDataElement);
        furnitureList.appendChild(infoRowElement);

        descriptionDataElement.setAttribute("colspan", "3");

        moreinfoElement.addEventListener("click", (e) => {
            if (e.currentTarget.textContent === "More Info") {
                e.currentTarget.textContent = "Less Info";
                infoRowElement.style.display = "contents";
            } else {
                e.currentTarget.textContent = "More Info";
                infoRowElement.style.display = "none";
            }
        });

        const totalPriceElement = document.querySelector(".total-price");

        buyitElement.addEventListener("click", (e) => {
            let currentPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2)

            tableRowElement.remove();
            infoRowElement.remove();
        });

        modelElement.value = "";
        yearElement.value = "";
        descriptionElement.value = "";
        priceElement.value = "";
    });
}
