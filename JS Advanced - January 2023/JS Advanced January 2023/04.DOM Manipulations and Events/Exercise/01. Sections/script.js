function create(words) {
   const parentDiv = document.querySelector("#content");

   words.forEach((word) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener("click", (event) => {
         event.target.querySelector("p").style.display = "block";
      });
      parentDiv.appendChild(div);
   });
}
