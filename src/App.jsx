import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Card1 from './components/Card1'
import Header from './components/Header'
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <About />
        <div className = "cards"
          style = {{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '2em'
          }}>
          <Card1 />
          <Card2 />
        </div>
      </div>
    </>
  )
}

export default App
