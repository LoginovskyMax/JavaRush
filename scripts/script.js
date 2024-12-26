// Вебсокеты и вебворкеры
const socket = new WebSocket('ws://localhost:8080')

socket.onmessage = function (event){
    writeMessage(event.data)
}
// socket.onopen = function () {
//     socket.send(JSON.stringify({type:'PING'}))
// }
socket.onerror = function(event) {
    console.error('WebSocket error:', event);
    console.log('Произошла ошибка WebSocket. Пожалуйста, попробуйте позже.');
};
socket.onclose = function(event) {
    console.log(event.code);
    console.log(event.reason);
};

const inpText = document.querySelector('#text')
const btn = document.querySelector('#btn')
const btnClose = document.querySelector('#btn-close')
const messageList = document.querySelector('#message')

btn.addEventListener('click', ()=> {
    if(!inpText.value){
        return
    }
    const message = {
        text: inpText.value,
        type: 'ECHO'
    }
    console.log('Размер буфера');
    console.log(socket.bufferedAmount);
    console.log( socket.readyState);
    socket.send(JSON.stringify(message))
    inpText.value = ''
})
btnClose.addEventListener('click', ()=> {
    socket.close(1000, 'Работа завершена')
    writeMessage('Соединение закрыто')
})
function writeMessage(text){
    const li = document.createElement('li')
    li.textContent = text
    messageList.appendChild(li)
}

// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(
//     (position) => {
//     const { latitude, longitude } = position.coords;
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     },
//     (error) => {
//     console.error('Error getting geolocation:', error);
//     },
//     {
//     enableHighAccuracy: true, // Высокая точность
//     timeout: 5000, // Таймаут ожидания ответа (мс)
//     maximumAge: 0
//     // Максимальное время, в течение которого можно использовать кэшированные данные (мс)
//     }
//     );
//     } else {
//     console.log('Geolocation is not supported by this browser.');
//     }

// const worker = new Worker('./scripts/worker.js')
// console.log('Отправляем сообщение');
// worker.postMessage('Hello from js')
// worker.onmessage = function(event){
//     console.log('onMeaasge');
//     console.log(event.data);
// }

const worker = new SharedWorker('./scripts/worker.js')
const port = worker.port
console.log('Отправляем сообщение');
port.postMessage('Hello from js port')
port.onmessage = function(event){
    console.log('onMeaasge');
    console.log(event.data);
}

