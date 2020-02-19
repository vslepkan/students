let main = document.querySelector("main");
let form = document.forms[0];

function createBox(array, main) {
  let div = document.createElement("div");

  [...array].forEach(element => {
    let p = document.createElement("p");

    if (element.value) {
      p.innerText = element.value;
      div.append(p);
    }
  });

  main.append(div);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  createBox(form.elements, main);
});
