// hello world!
const PATH = 'https://rickandmortyapi.com/api'
function getCharacters(page, filter){
    curPage.textContent = page
    let query = `page=${page}`
    loading = true
    if(filter){
        query = filter
    }
    fetch(`${PATH}/character/?${query}`)
    .then(response => response.json())
    .then(data=> {
        loading = false
        maxPage = data.info.pages
        totalPages.textContent = maxPage
        clearPage()
        data.results.forEach(element => {
            paintPage(element)
        });
    })
}

let page = 1
let maxPage = 0
let loading = false
const main = document.querySelector('.main')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const curPage = document.querySelector('#currentPage')
const filter = document.querySelector('#filter')
const totalPages = document.querySelector('#totalPage')

nextBtn.addEventListener('click', ()=>{
    if(loading)return
    if(page === maxPage)return
    page++
    getCharacters(page)
})
prevBtn.addEventListener('click', ()=>{
    if(loading)return
    if(page===1)return
    page--
    getCharacters(page)
})
filter.addEventListener('change', ()=>{
    if(loading)return
    getCharacters(0,filter.value)
})

function paintPage(character){
    const div = document.createElement('div')
    const title = document.createElement('span')
    const species = document.createElement('span')
    const img = document.createElement('img')

    div.classList.add('card')
   
    title.textContent = character.name
    species.textContent = character.species
    img.src = character.image
    div.append(title, species, img)
    main.append(div)
}
function clearPage(){
    main.innerHTML = ''
}
getCharacters(page)