// React
import { Route, Routes } from 'react-router-dom'

// Stlyes
import './App.css'

// Components
import Navbar from './assets/components/Navbar/Navbar'
import HomePage from './routes/HomePage'
import PageTwo from './routes/PageTwo'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path ='/' element={ <HomePage /> } />
          <Route path ='/pagetwo' element={ <PageTwo /> } />
        </Routes>
      </main>
    </>  
    )
}

export default App
