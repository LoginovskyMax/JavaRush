// hello world!
const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Вс']

function getById(id){
  return document.getElementById(id)
}

let date = new Date()
let curMonth = date.getMonth()
let curYear = date.getFullYear()
let curDay = date.getDate()
const calendar = getById('days')

function showCurrMonth() {
    showMonth(curYear, curMonth)
}

function showMonth(year, month) {
    getById('month').textContent = `${months[month]} ${year} `
    let firstDayOfMonth = new Date(year, month, 7).getDay()
    let lastDayOfMonth = new Date(year, month+1, 0).getDate()
    let lastDayOfPrevMonth =  new Date(year, month, 0).getDate()
   
    for(let i = 1; i<= lastDayOfMonth; i+=1){
        // добавление предыдущих дней месяца
        if(i === 1){
          let prevMontsDay = lastDayOfPrevMonth - firstDayOfMonth+1
          for(let j = 0; j < firstDayOfMonth; j+=1){
            let day = document.createElement('div')
            day.textContent = prevMontsDay
            day.classList.add('day-title', 'inactive')
            calendar.append(day)
            prevMontsDay+=1
          }
        }
        // актуалььные дни
        let day = document.createElement('div')
        day.textContent = i
        day.classList.add('day-title')
        day.addEventListener('click', ()=>{
            paintDay(day)
        })
        allDays.push(day)
        calendar.append(day)
        // добавление дней следующего месяца
        if(i === lastDayOfMonth){
            let remainDays = new Date(year, month, i).getDay()
            let counter = 1
            for(remainDays; remainDays < 7; remainDays+=1){
              let day = document.createElement('div')
              day.textContent = counter
              day.classList.add('day-title', 'inactive')
              calendar.append(day)
              counter+=1
            }
          }
    }
}
let counter = 0
let allDays = []
let clickedDays = []
let beetweenDays = []
function paintDay(day){
    if(counter > 1){
      counter = 0
      clickedDays.forEach(item => item.style.backgroundColor = 'inherit')
      clickedDays = []
      beetweenDays.forEach(item => item.style.backgroundColor = 'inherit')
      beetweenDays = []
    }
    if(clickedDays.length && +day.textContent < +clickedDays[0].textContent){
        return
    }
    clickedDays.push(day)
    if(counter === 1){
      let first = allDays.indexOf(clickedDays[0])
      let last = allDays.indexOf(clickedDays[1])
      beetweenDays = allDays.slice(first+1, last)
      beetweenDays.forEach(item => item.style.backgroundColor = 'pink')
    }
  day.style.backgroundColor = 'red'
  counter+=1
}

function createCalendar(){
    getById('next').addEventListener('click',nextMonth)
    getById('prev').addEventListener('click',prevMonth)
    let title = getById('daysTitle')
    daysOfWeek.forEach(item => {
        let day = document.createElement('div')
        day.textContent = item
        day.classList.add('day-title')
        title.append(day)
    })
    showCurrMonth()
}
function nextMonth() {
    if(curMonth === 11){
        curMonth = 0
        curYear +=1
    } else {
        curMonth+=1
    }
    clearBlock()
    showCurrMonth()
}
function prevMonth() {
    if(curMonth === 0){
        curMonth = 11
        curYear -=1
    } else {
        curMonth-=1
    }
    clearBlock()
    showCurrMonth()
}

function clearBlock(){
    getById('days').innerHTML = ''
}
createCalendar()
let showCalendar = false
getById('hide').addEventListener('click', ()=>{
    const calendar = getById('calendar')
    if(showCalendar){
        calendar.style.display = 'none'
    }else{
         calendar.style.display = 'block'
    }
    showCalendar = !showCalendar
})