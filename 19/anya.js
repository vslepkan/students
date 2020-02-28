function xhr(method, url, body = null) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => resolve(xhr.response);
    xhr.oneerror = reject;
    xhr.send(body);
  });
}

function postLoad(response = []) {
  for (let i = 0; i < 10; i++) {
    let random = getRandomInt(99);
    let post = response[random];
    let p = document.createElement("p");
    let ul = document.createElement("ul");
    let div = document.createElement("div");
    p.textContent = post.title;
    div.append(p);
    div.append(ul);
    xhr(
      "GET",
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    ).then(res => commentLoad(res, div));
  }
}

let commentLoad = (comments, post) => {
  let list = post.querySelector("ul");
  for (let i = 0; i < comments.length; i++) {
    let item = document.createElement("li");
    let { name, email, body } = comments[i];

    item.textContent = `${name} + ${email} + ${body}`;
    list.append(item);
  }
  document.body.append(post);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

xhr("GET", "https://jsonplaceholder.typicode.com/posts").then(postLoad);
