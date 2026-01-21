import { Routes, Route } from 'react-router-dom'
import './App.css'
import Day1Theory from './pages/Day1Theory'

function Home() {
  return (
    <>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day1/theory" element={<Day1Theory />} />
    </Routes>
  )
}

export default App
