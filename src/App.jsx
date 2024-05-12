import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './header/header'
import Header from './header/header'
import MainPage from './main/about/about'
import Modal from './modal/modal'

function App() {
  return (
    <>
      <div className='main'>
        <header className='header'>
          <Header></Header>
        </header>
        <hr></hr>
        <MainPage></MainPage>
      </div>
    </>
  )
}


export default App