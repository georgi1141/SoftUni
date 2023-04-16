const btn = document.querySelector("#btn");
const form = document.querySelector("#register-form");
document.getElementById("user").style.display = "none";
document.querySelector('nav p.email').style.display = "none";


btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("rePass");

  try {
    if ([...formData.values()].some((el) => el == "")) {
      throw new Error("Input is not correct!");
    } else if (password != rePass) {
      throw new Error("The passwords do not match!");
    }

    const res = await fetch("http://localhost:3030/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    alert('Successful registration!')


    const data = await res.json();
    const user = {
      email: data.email,
      id: data._id,
      token: data.accessToken,
    };

    // let currentEmail = data.email
    // let atIndex = currentEmail.indexOf('@')
    // let name = currentEmail.slice(0,atIndex)

    // document.querySelector('nav p.email span').textContent= name

    localStorage.setItem("userData", JSON.stringify(user));

    window.location = "./index.html";
  } catch (error) {
    form.reset();
    alert(error.message);
  }
});
