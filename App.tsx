import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Contact from './Contact'
import Projects from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Contact /> */}
      <Projects />
    </>
  )
}

export default App
