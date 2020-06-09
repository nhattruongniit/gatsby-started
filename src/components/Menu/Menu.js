import React from "react"
import { Link } from "gatsby"

import "./styles.scss"

const Menu = () => {
  return (
    <div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/using-typescript/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
