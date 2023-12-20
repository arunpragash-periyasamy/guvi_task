import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' Component={Login}></Route>
          <Route path='/signUp' Component={SignUp}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
