// hello world!

window.onerror = function (message, source, lineno, colno, error) {
  console.log("Ошибка:", message, source, lineno, colno, error);
  // Отправка ошибки на сервер
};
function getData(str) {
  console.log(str.toLowerCase());
}
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
const person = { name: "John" };
// greet.apply(person, ['Привет', '!'])
// greet.call(person, "Hello", "!"); // Выведет: "Hello, John!"
const greetWithPersonContext = greet.bind(person, "Hello 2222", "!");
// greetWithPersonContext()
let post = {
  title: "new post",
  body: "1234 3424 24",
  userId: 1,
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    // getPost(3);
    // getWithAxios()
    postWithAxios()
});

function getWithAxios() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/5")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
}
function postWithAxios() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", post)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
// btn.addEventListener("click", () => {
//   getPost(id);
// });
let counter = 0;
const controller = new AbortController()
const signal = controller.signal

function getPost(id) {
  // по умолчанию метод GET
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        signal,
        // mode: 'no-cors'
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error network!");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// controller.abort('My reason')



function sendPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "POST", //"PUT""PATCH"
    body: JSON.stringify(post), //JSON.parse()
    headers: {
      "Content-Type": "application/json",
    //   'Token': "Bearer your_api_key",
    //   "X-Custom-Header": "SomeValue",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error network!");
        }
      console.log(response.headers.get("Content-Type"));
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}


