const navBtn = document.querySelector('[name="nav-btn"]')
const types = document.querySelector(".types")
navBtn.addEventListener("change", () => {
  if (navBtn.checked == true) {
    types.style.display = "grid"
  } else {
    types.style.display = "none"
  }
})

const links = document.querySelectorAll('a[href]')
for (let link of links) {
  if (document.title === link.innerText) {
    link.classList.add('active')
  }
}