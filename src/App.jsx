import { useState } from 'react'
import "@fontsource/roboto/100.css"; // normal
import "@fontsource/roboto/200.css"; // medium
import "@fontsource/roboto/300.css"; // bold
import "@fontsource/roboto/400.css"; // normal
import "@fontsource/roboto/500.css"; // medium
import "@fontsource/roboto/700.css"; // bold

import styles from './App.module.css'

import './App.css'
import Headbar from './Headbar/Headbar' 
import Hero from './Hero/Hero'
import ContactWidgets from './ContactWidgets/ContactWidgets'
import Projects from './Projects/Projects'
import About from './About/About'
import Exploring from './Exploring/Exploring'
import Footer from './Footer/Footer'

export default function App() {
  

  return (
    <>
      <div className={styles.page}>
        <Headbar />
        <Hero />
        <ContactWidgets />
        <Projects />
        <About />
        <Exploring />
      </div>
      <Footer />
    </>
  )
}


