let user = JSON.parse(localStorage.getItem("userData"));
const logoutBtn = document.querySelector("#logout");
const addFormBtn = document.querySelector("#addForm .add");

if (user) {
  document.querySelector(".email span").textContent = user.email;
  document.querySelector("#guest").style.display = "none";
  addFormBtn.disabled = false;
  loadData();
} else {
  addFormBtn.disabled = true;
  document.getElementById("user").style.display = "none";
}

//button delegation for delete and update

document.querySelector("#main").addEventListener("click", (e) => {
  const currentBtn = e.target.textContent;
  const id = e.target.id === "" ? e.target.dataset.id : e.target.id;
  const currentCatchEl = e.target.parentElement;

  if (currentBtn == "Update") {
    updateCatch(id, currentCatchEl);
  } else if (currentBtn == "Delete") {
    deleteCatch(id);
  }
});

async function deleteCatch(id) {
  await fetch(`http://localhost:3030/data/catches/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "X-Authorization": user.token,
    },
  });
  loadData();
}

async function updateCatch(id, currentCatchEl) {
  let [angler, weight, species, location, bait, captureTime] =
    currentCatchEl.querySelectorAll("input");

  try {
    const res = await fetch(`http://localhost:3030/data/catches/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "X-Authorization": user.token,
      },
      body: JSON.stringify({
        angler: angler.value,
        weight: weight.value,
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: captureTime.value,
      }),
    });

    if (!res.ok) {
      const error = res.json();
      throw new Error(error.message);
    }

    loadData();
  } catch (error) {
    alert(error.message);
  }
}

// load functionalirty
document.querySelector(".load").addEventListener("click", loadData);
//add functionality
addFormBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!user) {
    window.location = "./login.html";
    return;
  }

  const formData = new FormData(document.querySelector("#addForm"));

  const data = [...formData.entries()].reduce(
    (acc, [k, v]) => Object.assign(acc, { [k]: v }),
    {}
  );

  try {
    if (Object.values(data).some((x) => x === "")) {
      throw new Error("All values are required!");
    }

    const res = await fetch("http://localhost:3030/data/catches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Authorization": user.token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = res.json();
      throw new Error(error.message);
    }

    document.querySelector("#addForm").reset();
    loadData();
  } catch (error) {
    alert(error.message);
  }
});

async function loadData() {
  try {
    const res = await fetch("http://localhost:3030/data/catches");

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    document
      .querySelector("#catches")
      .replaceChildren(...data.map(createCatch));

    function createCatch(data) {
      const isDisabled = user && data._ownerId === user.id ? false : true;
      const catches = createElement(
        "div",
        { class: "catch" },
        createElement("label", {}, "Angler"),
        createElement("input", {
          type: "text",
          class: "angler",
          value: data.angler,
          disabled: isDisabled,
        }),
        createElement("label", {}, "Weight"),
        createElement("input", {
          type: "text",
          class: "weight",
          value: data.weight,
          disabled: isDisabled,
        }),
        createElement("label", {}, "Species"),
        createElement("input", {
          type: "text",
          class: "species",
          value: data.species,
          disabled: isDisabled,
        }),
        createElement("label", {}, "Location"),
        createElement("input", {
          type: "text",
          class: "location",
          value: data.location,
          disabled: isDisabled,
        }),
        createElement("label", {}, "Bait"),
        createElement("input", {
          type: "text",
          class: "bait",
          value: data.bait,
          disabled: isDisabled,
        }),
        createElement("label", {}, "Capture Time"),
        createElement("input", {
          type: "number",
          class: "capture-time",
          value: data.captureTime,
          disabled: isDisabled,
        }),
        createElement(
          "button",
          { class: "update", id: data._id, disabled: isDisabled },
          "Update"
        ),
        createElement(
          "button",
          { class: "delete", id: data._id, disabled: isDisabled },
          "Delete"
        )
      );

      return catches;
    }

    function createElement(type, attr, ...content) {
      let element = document.createElement(type);
      for (const item in attr) {
        if (item === "class") {
          element.classList.add(attr[item]);
        } else if (item === "disabled") {
          element.disabled = attr[item];
        } else {
          element[item] = attr[item];
        }
      }

      for (let item of content) {
        if (typeof item == "string" || typeof item == "number") {
          item = document.createTextNode(item);
        }
        element.appendChild(item);
      }

      return element;
    }
  } catch (error) {
    alert(error.message);
  }
}

logoutBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3030/users/logout",{
        headers:{
            'X-Authorization': user.token
        }
    });
  } catch (error) {
    alert(error.message);
  }

  localStorage.clear();
  window.location = "./index.html";
});
