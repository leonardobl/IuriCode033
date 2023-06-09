import Home from './components/pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from './components/pages/courses'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Courses} path="/cursos" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
