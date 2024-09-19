import React from 'react'
import NavBar from '../Components/NavBar'
import Title from '../Components/Title'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <>
        <NavBar />
        <Title  titulo="Portafolio Ardudev" subTituli="Página principal"/>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Footer />
    </>

    
  )
}

export default HomePage