function xhr(method, url, body = null) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url); // Вызов open, вопреки своему названию, не открывает соединение. Он лишь конфигурирует запрос, но непосредственно отсылается запрос только лишь после вызова send.

    xhr.responseType = "json"; // Указываем ожидаемый тип ответа

    xhr.setRequestHeader("Content-type", "application/json"); // Устанавливаем заголовок. В каком формате сервер должен принять наши данные.

    xhr.onload = () => resolve(xhr.response); // Событие

    xhr.onerror = reject; // Событие

    xhr.send(body); // Этот метод устанавливает соединение и отсылает запрос к серверу. Необязательный параметр body содержит тело запроса.
  });
}

function usersLoad(response = []) {
  response.forEach(element => {
    let p = document.createElement("p");
    let ul = document.createElement("ul");
    p.setAttribute("data-id", element.id);
    p.innerText = `${element.name} / ${element.email} / ${element.company.name}`;
    p.append(ul);

    document.body.append(p);
  });
}

function albumsLoad(response) {
  response.forEach(album => {
    let user = document.querySelector(`[data-id="${album.userId}"]`);
    let ul = user.querySelector("ul");
    let li = document.createElement("li");
    li.innerText = album.title;

    ul.append(li);
  });
}

// xhr("GET", "https://jsonplaceholder.typicode.com/users")
//   .then(res => usersLoad(res))
//   .then(() => {
//     xhr("GET", "https://jsonplaceholder.typicode.com/albums")
//       .then(res => albumsLoad(res))
//       .catch(error => console.log(error));
//   })
//   .catch(error => console.log("Users: ", error));
