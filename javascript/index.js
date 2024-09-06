const id = function(id){
    return document.getElementById(id)
}

const searchInput = id("topbar-search-input")
const ogInpStyle = getComputedStyle(searchInput)
let ogInpWidth = parseFloat(ogInpStyle.width.split("px")[0])
let ogInpHeight = parseFloat(ogInpStyle.height.split("px")[0])

ogInpWidth = (ogInpWidth/window.innerWidth)*100+"vw"
ogInpHeight = (ogInpHeight/window.innerHeight)*100+"vh"


const searchBar = id("topbar-search-container")

searchInput.onfocus = function(){
    searchBar.style.width = "55%"
    searchBar.style.height = "48%"
}

searchInput.addEventListener("blur",function(){
    searchBar.style.width = ogInpWidth
    searchBar.style.height = ogInpHeight
})