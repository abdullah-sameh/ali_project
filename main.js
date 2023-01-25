const userName = document.getElementById("userName")
const password = document.getElementById("password")
const login = document.getElementById('login')

login.addEventListener("submit", (e) => {
  e.preventDefault()
  if (userName.value === "alhag") {
    window.location.href = "./pages/alhag.html"
  } else if (userName.value === "user") {
    window.location.href === "./pages/add.html"
  }
})
