const bat = document.querySelector(".open");
const but = document.querySelector(".close");
const apper = document.querySelector(".first");
const create = document.querySelector(".create")

bat.addEventListener("click", showman)

function showman() {
apper.classList.add('leave');
// create.style.zIndex= "5"

}
// create.style.zIndex= "5"

but.addEventListener("click", men)

function men() {
apper.removeAttribute('class')
apper.setAttribute("class", "first")
console.log(create);
console.log(but);
// create.style.zIndex= "-5"


}



// console.log(create);
// console.log(but);
