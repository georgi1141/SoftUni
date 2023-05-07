function attachEvents() {
  document.querySelector("#btnLoadPosts").addEventListener("click", onClick);

  const postsElement = document.querySelector("#posts");
  const posts = [];

  async function onClick() {
    postsElement.innerHTML = "";

    const response = await fetch("http://localhost:3030/jsonstore/blog/posts");
    const data = await response.json();
    const toArr = Object.entries(data);
    toArr.forEach((post) => {
      const optionElement = document.createElement("option");
      optionElement.setAttribute("value", `${post[0]}`);
      optionElement.textContent = post[1].title;
      postsElement.appendChild(optionElement);
      posts.push({ title: `${post[1].title}`, value: `${post[1].body}` });
    });
  }

  document.querySelector("#btnViewPost").addEventListener("click", async () => {
    const response = await fetch(
      "http://localhost:3030/jsonstore/blog/comments"
    );
    const data = await response.json();
    const selectedElement = document.querySelector("#posts");
    const comments = Object.values(data).filter(
      (el) => el.postId === selectedElement.value
    );
    document.querySelector("#post-title").textContent =
      selectedElement.selectedOptions[0].textContent;

    const po = posts.filter(
      (p) => p.title === selectedElement.selectedOptions[0].textContent
    );

    document.querySelector("#post-body").innerHTML = `${po[0].value}`;
    document.querySelector("#post-comments").innerHTML = "";

    comments.forEach((el) => {
      const liElement = document.createElement("li");

      liElement.textContent = el.text;
      document.querySelector("#post-comments").appendChild(liElement);
    });
  });
}
attachEvents();
