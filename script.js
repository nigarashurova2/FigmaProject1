let menuBarIcon = document.querySelector(".menuBar");
let navLists = document.querySelector(".navList");
console.log(menuBarIcon, "menuBarIcon");
console.log(navLists, "navLists")
menuBarIcon.addEventListener("click", ()=>{
    console.log("33" , navLists)
    navLists.classList.toggle("menuBarList");
})