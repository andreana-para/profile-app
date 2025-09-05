import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Card1 from './components/Card1'
import Header from './components/Header'
import Card2 from './components/Card2'
import Card from './components/Card'
import man from './assets/man.jpg'
import woman from './assets/woman.jpg'
import Wrapper from './components/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  const profiles = [
    {name: "John Doe", title: "Software Engineer", email: "email@gmail.com", img: man},
    {name: "Jane Doe", title: "Web Developer", email: "email2@gmail.com", img: woman}
  ]

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
          }}> {
            profiles.map((profile, index) => (
          <Card key={profile.email} name = {profile.name} title = {profile.title} email = {profile.email} img = {profile.img}/>
            ))
          }  
        </div>
      </div>
    </>
  )
}

export default App
