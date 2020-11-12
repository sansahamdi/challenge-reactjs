import React from 'react'
import NavBar from './components/NavBar'
import Introduction from './components/Instroduction'
import Projects from './components/Projects'
import Form from './components/Form'
import Footer from './components/Footer'
import './style.css'


function App() {
const navLinks=[
  {
    text:'About',
    href:'#introduction'
  },
  {
    text:'Projects',
    href:'#about'
  },
  {
    text:'services',
    href:'#services'
  },
  {
    text:'Contact',
    href:'#contact'
  }
]

const name= 'SANSA'
const fullName='Marion cotillard'
const Actor='/marion.jpg'

  return (
    <div>
      <NavBar name={name} navLinks={navLinks} />
      <Introduction name={fullName} image={Actor} />
      <Projects />
      <Form  />
      <Footer />
    </div>
  );
}

export default App;
