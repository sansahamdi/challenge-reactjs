import React from 'react'

function Introduction(props){
const {name,image}=props

    return(
        <section id="intro-section" className="separation">
      <h2>
        Hello , i am <span class="text-important">{name}</span> , <br />
        and i make a horrible websites
      </h2>
      <img style={{width:'300px',height:'350px'}} src={image} alt={name} />
    </section>
    )
}

export default Introduction