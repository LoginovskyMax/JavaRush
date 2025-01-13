// hello world!
const btn = document.querySelector("#pass");
const menu = document.querySelector("#menu");
const selected = document.querySelector("#selected");

let show = false;
btn.addEventListener("click", () => {
  if (show) {
    menu.style.display = "none";
    const allPassengers = Object.values(passengers).reduce((acc, item)=> acc+item)
    if(allPassengers){
       selected.textContent = `${allPassengers} пассажиров`
    }

  } else {
    menu.style.display = "block";
  }
  show = !show;
});

menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

const minusBtns = document.querySelectorAll(".minus");
const plusBtns = document.querySelectorAll(".plus");
const counters = document.querySelectorAll(".counter");

const passengers = {
  adult: 0,
  children: 0,
  baby: 0,
};
plusBtns.forEach((btn) => {
    changeCounter(btn, 'plus')
});
minusBtns.forEach((btn) => {
    changeCounter(btn, 'minus')
});

function changeCounter(btn, sign){
    let plus = true
    if(sign === 'minus'){
        plus = false
    }
    btn.addEventListener("click", () => {
        const id = +btn.dataset.id;
        switch (id) {
          case 0:
            if(!checkPassengers('adult', plus))return
            plus ? passengers.adult++ : passengers.adult--;
            counters[id].textContent = passengers.adult;
            break;
          case 1:
            if(!checkPassengers('children', plus))return
            plus ? passengers.children++ : passengers.children--;
            counters[id].textContent = passengers.children;
            break;
          case 2:
            if(!checkPassengers('baby', plus))return
            plus ? passengers.baby++ : passengers.baby--;
            counters[id].textContent = passengers.baby;
            break;
          default:
            break;
        }
      });
}

function checkPassengers(key, plus){
    if(passengers[key] === 0 && !plus){
        return false
    }
    const allPassengers = Object.values(passengers).reduce((acc, item)=> acc+item)
    if(allPassengers>=9 && plus){
        return false
    }
    return true
}
