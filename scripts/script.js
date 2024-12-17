// hello world!
let myPromise3 = new Promise((resolve, reject) => {
  let lag = false;
  const data = {
    name: "Nick",
    age: 25,
  };
  setTimeout(() => {
    if (lag) {
      reject("Lag");
    }
    resolve(data);
  }, 1000);
});
let myPromise = new Promise((resolve, reject) => {
  let lag = false;
  const data = {
    name: "Alice",
    age: 25,
  };
  setTimeout(() => {
    if (lag) {
      reject("Lag");
    }
    resolve(data);
  }, 2000);
});
let secondPromise = new Promise((resolve, reject) => {
  let lag = false;
  const data = {
    name: "Max",
    age: 25,
  };
  setTimeout(() => {
    if (lag) {
      reject("Lag");
    }
    resolve(data);
  }, 3000);
});

let promiseArr = [];
promiseArr.push(myPromise);
promiseArr.push(secondPromise, myPromise3);


async function readStream(stream) {
    for await (const chunk of stream) {
    console.log("Получен фрагмент данных:", chunk);
    // Обработка фрагмента данных
    }
}
// readStream(promiseArr)
readStream([secondPromise, myPromise3, myPromise]);
// Promise.any(promiseArr)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all(promiseArr)
//     .then(data => {
//     console.log(data);
//     })
//     .catch(err => {
//     console.log(err);
//     })

// Promise.allSettled(promiseArr)
//     .then(data => {
//     console.log(data);
//     })
//     .catch(err => {
//     console.log(err);
//     })
// Promise.race(promiseArr)
//     .then(data => {
//     console.log(data);
//     })
//     .catch(err => {
//     console.log(err);
// })

// myPromise
//     .then((response) => {
//         console.log(response);

// })
//     .catch((err) => {
//     console.log(err);
//     })

function delay(ms, data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => { 
          if (data > 1) {
              resolve('over data')
          }
          resolve(data);
      }, ms);
  });
}

async function loadPosts() {
  try {
    //   let data = await delay(2000, 1); 1сек
    //   const secondData = await delay(2000, data); 5сек
    //   const secondData2 = await delay(2000, data); 1сек
      //   const secondData3 = await delay(2000, data); 1сек
      let arr = []
      let data =  delay(2000, 1); 
      const secondData = delay(2000, data); 
      const secondData2 =  delay(2000, data);
      const secondData3 = delay(2000, data);
      arr.push(data, secondData, secondData2)
      const allData =  await Promise.allSettled(arr)
       renderPage();
    console.log(data);
    console.log("Выполнены 1 промисы");
    data += 1;
    console.log(secondData);
    console.log("Выполнены второй промисы");
  } catch (err) {
    console.log(err);
  }
}


// delay(1000)
//     .then((data) => {
//         console.log(data);
//         console.log('первый делей');
//         return delay(2000)
//     })
//     .then((data) => {
//         console.log('второй делей');
//         return delay(2000)
// })

console.log("Начало"); //1
// Макрозадача 1: setTimeout
setTimeout(() => {
  console.log("setTimeout"); //5
  // Микрозадача 1, вложенная в макрозадачу 1
  Promise.resolve().then(() => console.log("Promise.then внутри setTimeout")); //6
  // Макрозадача 2, вложенная в макрозадачу 1
  setTimeout(() => {
    console.log("Вложенный setTimeout"); //8
  }, 0);
  Promise.resolve().then(() => console.log("Promise.then2 внутри setTimeout")); //7
}, 0);
// Микрозадача 2
Promise.resolve().then(() => console.log("Promise.then")); //3
Promise.resolve().then(() => console.log("Promise.then2")); //4
console.log("Конец");//2
