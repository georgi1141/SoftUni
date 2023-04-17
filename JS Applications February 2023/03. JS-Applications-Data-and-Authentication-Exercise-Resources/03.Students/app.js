const tbodyElement = document.querySelector("tbody");

const url = "http://localhost:3030/jsonstore/collections/students";

async function getStudents() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    const data = await response.json();

    const students = Object.values(data);

    students.forEach((x) => {
      const student = Object.values(x);

      const trElement = document.createElement("tr");

      for (let i = 0; i < student.length - 1; i++) {
        const tdElement = document.createElement("td");
        tdElement.textContent = student[i];
        trElement.appendChild(tdElement);
      }

      tbodyElement.appendChild(trElement);
    });
  } catch (error) {
    alert(error.messgae);
  }
}

getStudents();

const formElement = document.querySelector("#form");

formElement.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(formElement);

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const facultyNumber = Number(formData.get("facultyNumber"));
  const grade = Number(formData.get("grade"));

  if (firstName == "" || lastName == "" || facultyNumber == "" || grade == "") {
    formElement.reset();
    return alert("All fields must be filled in!");
  }

  try {
    const options = {
      method: "POST",
      hearders: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade,
      }),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    const data = await res.json();

    tbodyElement.innerHTML = "";
    getStudents();
    formElement.reset();
  } catch (error) {
    alert(error.messgae);
  }
}
