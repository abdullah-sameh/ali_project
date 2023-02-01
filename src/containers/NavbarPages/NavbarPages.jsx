import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./navbarPages.css"
import "./navbarPages.css"
import logo from "../../assets/renault.png"

const Navbar = (props) => {
  const [linksStyle, setLinksStyle] = useState("none")
  const links = [
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
    { name: "رينو", src: "./reno" },
  ]
  return (
    <header>
      <nav className="container">
        <section className="left">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </section>

        <section>{props.name}</section>

        <i className="someLinks material-icons" onClick={() => {
          (linksStyle === 'none') ? setLinksStyle('grid') : setLinksStyle('none')
        }}>menu</i>

      </nav>
      
      <div className="links container" style={{ display: linksStyle }}>
        {links.map((link) => {
          return <Link to={link.src}>{link.name}</Link>
        })}
      </div>
    </header>
  )
}

export default Navbar
