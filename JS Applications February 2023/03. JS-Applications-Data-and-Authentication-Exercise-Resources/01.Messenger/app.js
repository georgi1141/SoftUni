function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const messageElement = document.querySelector("#messages");
  const sendBtn = document.querySelector("#submit");
  const refreshBtn = document.querySelector("#refresh");
  const authorElement = document.querySelector("#author");
  const contentElement = document.querySelector("#content");

  sendBtn.addEventListener("click", (e) => {
    const data = {
      author: authorElement.value,
      content: contentElement.value,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    authorElement.value = "";
    contentElement.value = "";
  });

  refreshBtn.addEventListener("click", (e) => {
  
    
    messageElement.value = "";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        Object.values(data).map(
          (obj) => (messageElement.value += `${obj.author}: ${obj.content}\n`)
        );
      });
  });
}

attachEvents();
