let main = document.querySelector("main");
let form = document.forms[0];

function createElement(tag = "p", content) {
  let element = document.createElement(tag);
  element.textContent = content;

  return element;
}

function createBox(response) {
  localStorage.setItem("comment", JSON.stringify(response));

  let { name, email, comment, company } = response;
  let div = document.createElement("div");
  div.classList.add("comment");

  div.append(createElement("p", name));
  div.append(createElement("p", company));
  div.append(createElement("p", email));
  div.append(createElement("p", comment));

  main.append(div);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  let state = {};

  Array.from(form.elements).forEach(input => {
    if (input.value) {
      state[input.name] = input.value;
    }
  });

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(state),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(createBox)
    .catch(error => console.log(error));
});

function showComment() {
  let comment = localStorage.getItem("comment");

  comment ? createBox(JSON.parse(comment)) : null;
}

document.addEventListener("DOMContentLoaded", showComment);
