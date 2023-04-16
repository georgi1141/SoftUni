const url = "http://localhost:3030/users/login";
document.querySelector('nav p.email').style.display = "none";
document.getElementById("user").style.display = "none";
const form = document.querySelector("form");

document.querySelector("form button").addEventListener("click", onclick);

async function onclick(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    if (email == "") {
      throw new Error("Please type your email.");
    } else if (password == "") {
      throw new Error("Please type your password.");
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    console.log(data);
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    window.location = "./index.html";
  } catch (error) {
    form.reset();
    alert(error.message);
  }
}
