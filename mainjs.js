const userName = document.getElementById("userName")
const password = document.getElementById("password")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (userName.value === "alhag") {
    window.location.href = "./html_files/alhag.html"
  } else if (userName.value === "user") {
    window.location.href === "./html_files/add.html"
  }
})
