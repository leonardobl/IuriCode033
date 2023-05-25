import Home from './components/pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from './components/pages/courses'
import News from './components/pages/news'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Courses} path="/cursos" />
        <Route Component={News} path="/noticias" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
