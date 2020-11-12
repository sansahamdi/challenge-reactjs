import React from 'react'

function NavBar(props){
const {name, navLinks} = props


    return(
        <header className="separation">
      <h1>{name}</h1>
      <ul class="navmenu">
        {navLinks.map((el,i)=> <li><a href={el.href}>{el.text}</a></li>  )}
      </ul>
    </header>
    )
}


export default NavBar