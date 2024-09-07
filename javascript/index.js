import { colors, lightBackgroundColor } from "./lightColors.js";

const id = function(id){
    return document.getElementById(id)
}

const searchInput = id("topbar-search-input")
const ogInpStyle = getComputedStyle(searchInput)

let ogInpWidth = parseFloat(ogInpStyle.width.split("px")[0])
let ogInpHeight = parseFloat(ogInpStyle.height.split("px")[0])
ogInpWidth = (ogInpWidth/window.innerWidth)*100+"vw"
ogInpHeight = (ogInpHeight/window.innerHeight)*100+"vh"

const progress_bar = id("page-progress-bar")

const searchBar = id("topbar-search-container")

searchInput.onfocus = function(){
    searchBar.style.width = "55%"
    searchBar.style.height = "48%"
}

searchInput.addEventListener("blur",function(){
    searchBar.style.width = ogInpWidth
    searchBar.style.height = ogInpHeight
})

function lerp(a,b,t){
    return (1-t) * a + t*b
}

//PROGRESS BAR
function onScroll(){
    const topOfPage = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight
    
    progress_bar.style.width = (topOfPage/scrollHeight)*100+"vw"
}

window.onscroll = onScroll

onScroll()