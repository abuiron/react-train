import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProjectList from './components/ProjectList'
import Login from './components/Login'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/projects' element={<ProjectList />}/>
        <Route path='*' element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
