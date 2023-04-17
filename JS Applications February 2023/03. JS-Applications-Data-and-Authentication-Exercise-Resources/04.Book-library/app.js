const loadBooksBtn = document.querySelector("#loadBooks");
const tbodyElement = document.querySelector("tbody");
const url = " http://localhost:3030/jsonstore/collections/books";

const form = document.querySelector("#submit");

// load all books
loadBooksBtn.addEventListener("click", getAllBooks);
//create a book
form.addEventListener("submit", createBook);
// edit/delete functionality

document.querySelector("table").addEventListener("click", delagation);

async function getAllBooks() {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    const data = await res.json();

    tbodyElement.innerHTML = "";

    Object.entries(data).forEach((value) => {
      const trElement = document.createElement("tr");
      trElement.setAttribute("id", `${value[0]}`);

      trElement.innerHTML = template(value[1].title, value[1].author);
      tbodyElement.appendChild(trElement);
    });
  } catch (error) {
    alert(error.message);
  }
}

function template(title, author) {
  return `
    <td>${title}</td>
    <td>${author}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
`;
}

async function createBook(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const title = formData.get("title");
  const author = formData.get("author");

  if (title == "" || author == "") {
    return alert("Both fields must be filled in!");
  }

  const opt = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      author,
      title,
    }),
  };

  try {
    const res = await fetch(url, opt);

    if (!res.ok) {
      const err = await res.json();
      throw err;
    }

    getAllBooks();
    form.reset();

    const data = await res.json();
  } catch (error) {
    alert(error.message);
  }
}

async function delagation(event) {
  event.preventDefault();

  const currentBtn = event.target.textContent;

  if (currentBtn == "Edit") {
    document.querySelector("#submit").style.display = "none";
    document.querySelector("#edit").style.display = "inline";
    const id = event.target.parentElement.parentElement.id;

    const title = Array.from(event.target.parentElement.parentElement.children);

    const name = document.querySelector("#title");
    const author = document.querySelector("#author");
    const btn = document.querySelector("#btn");

    name.value = title[0].textContent;
    author.value = title[1].textContent;

    btn.addEventListener("click", async (e) => {
      e.preventDefault();

      const res = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          author: author.value,
          title: name.value,
        }),
      });

      const data = await res.json();

      getAllBooks();

      document.querySelector("#submit").style.display = "inline";
      document.querySelector("#edit").style.display = "none";
    });
  } else if (currentBtn == "Delete") {
    const id = event.target.parentElement.parentElement.id;

    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = res.json();
        throw error;
      }
      getAllBooks();
    } catch (error) {
      alert(error.message);
    }
  }
}
