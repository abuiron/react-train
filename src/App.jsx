import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProjectList from './components/ProjectList'
import Login from './components/Login'
import Notfound from './components/Notfound'
import Post from './components/Post'
import  Tabs  from './components/Tabs'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/tabs' element={<Tabs />}/>
        <Route path='/projects' element={<ProjectList />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
