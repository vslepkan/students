let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.responseType = "json";

xhr.onload = () => {
  xhr.response.forEach(element => {
    let p = document.createElement("p");

    p.innerText = `${element.name} / ${element.email} / ${element.company.name}`;

    document.body.append(p);
  });
};

xhr.onerror = () => {};

xhr.send();
