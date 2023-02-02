function addItem() {
    // get reference to the user input's value
    const input = document.getElementById("newItemText").value;
    //create li element
    const newLi = document.createElement("li");
    // insert text to the new li element
    newLi.textContent = input;
    // check if there is an empty input
    const list = document.getElementById("items");
    if (input !== "") {
        //insert new li element into the list
        list.appendChild(newLi);
    }
    // clear the input field after pressing add
    document.getElementById("newItemText").value = "";
}
