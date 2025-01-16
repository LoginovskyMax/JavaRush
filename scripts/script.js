// hello world!
function getCityList(){
  fetch('http://localhost:3000/city')
  .then(response=> response.json())
  .then(data => {
    paintCity(data)
  })
}


getCityList()
function paintCity(arr){
  const ol = document.getElementById('city')
  const sorted = arr.sort((a,b) => b.rating - a.rating)
  sorted.forEach(city => {
     const li = createEl('li')
     const box =  createEl('span', 'list_item')
     const name = createEl('span')
     const imgBox = createEl('span', 'list_img-box')
     const rating = createEl('span')
     const img = createEl('img')
     img.width = '20'
     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/630px-Red_star.svg.png'
     name.textContent = city.name
     rating.textContent = city.rating
     imgBox.append(img, rating)
     box.append(name,imgBox)
     li.append(box)
     ol.append(li)
   });
}
function createEl(tag, className){
  const elem = document.createElement(tag)
  if(className){
    elem.classList.add(className)
  }
  return elem
}

const modal = document.querySelector('.modal')
const openBtn = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close')
const content = document.querySelector('.modal_content')

openBtn.addEventListener('click', ()=>{
  modal.style.display = 'flex'
  
})
closeBtn.addEventListener('click', ()=>{
  modal.style.display = 'none'
})
modal.addEventListener('click', ()=>{
  modal.style.display = 'none'
})
content.addEventListener('click', (e)=>{
  e.stopPropagation()
})

