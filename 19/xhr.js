function xhr(method, url, onload, body = null) {
  let xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.responseType = "json";

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = onload;

  xhr.onerror = () => {
    console.log("Error here!");
  };

  xhr.send(body);
}

function usersLoad() {
  if (this.status === 200) {
    this.response.forEach(element => {
      let p = document.createElement("p");
      let ul = document.createElement("ul");
      p.setAttribute("data-id", element.id);
      p.innerText = `${element.name} / ${element.email} / ${element.company.name}`;
      p.append(ul);

      document.body.append(p);
    });
  }
}

function albumsLoad() {
  if (this.status === 200) {
    this.response.forEach(album => {
      let user = document.querySelector(`[data-id="${album.userId}"]`);
      let ul = user.querySelector("ul");
      let li = document.createElement("li");
      li.innerText = album.title;

      ul.append(li);
    });
  }
}

xhr("GET", "https://jsonplaceholder.typicode.com/users", usersLoad);
xhr("GET", "https://jsonplaceholder.typicode.com/albums", albumsLoad);
