import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddProduct from './components/AddProduct'
import NavBar from './components/NavBar'
import SearchProduct from './components/SearchProduct'
import DeleteProduct from './components/DeleteProduct'
import ViewAll from './components/ViewAll'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/search' element={<SearchProduct/>}/>
      <Route path='/delete' element={<DeleteProduct/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
