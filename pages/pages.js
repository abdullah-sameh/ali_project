// add header
const header = document.querySelector("header")
if (header.innerText === "") {
  header.innerHTML = `
    <nav class="container">
        <section class="left">
          <a href="./home.html">
            <img src="../imgs/renault.png" alt="logo" />
          </a>
        </section>
        <section>${document.title}</section>
        <section class="right">
          <label for="nav-btn">
            <i id="icon" class="material-icons"></i>
            <input type="checkbox" name="nav-btn" id="nav-btn" />
          </label>
        </section>
      </nav>
      <div class="types container">
        <a href="./logan.html">لوجان</a>
        <a href="./klio.html">كليو</a>
        <a href="./simpol.html">سيمبول</a>
        <a href="./flownse.html">فلونس</a>
        <a href="./dastre.html">داستر</a>
        <a href="./sandero.html">سانديرو</a>
        <a href="./step-way.html">سانديرو استيب واي</a>
        <a href="./cadgar.html">كادجار</a>
        <a href="./capture.html">كابتشر</a>
        <a href="./optema.html">اوبتيما</a>
        <a href="./renpo.html">رينبو</a>
        <a href="./snake.html">سينيك</a>
      </div>
  `
}
const icon = document.getElementById("icon")
icon.innerText = "menu"
// add search bar to all pages
const main = document.querySelector("main")

if (main.innerText === "") {
  main.innerHTML = `
    <form id="search" class="container">
      <label for="search">
        <input type="search" />
      </label>
      <button type="submit"><i class="material-icons">search</i></button>
    </form>
`
}

const navBtn = document.querySelector('[name="nav-btn"]')
const types = document.querySelector(".types")
navBtn.addEventListener("change", () => {
  if (navBtn.checked == true) {
    types.style.display = "grid"
    icon.innerText = "close"
  } else {
    types.style.display = "none"
    icon.innerText = "menu"
  }
})

const links = document.querySelectorAll("a[href]")
for (let link of links) {
  if (document.title === link.innerText) {
    link.classList.add("active")
  }
}


