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
import Filters from './components/Filters'
import Search from './components/Search'
import styles from './styles/Header.module.css'

function App() {
  //const [count, setCount] = useState(0)

  const profiles = [
    { name: "John Doe", title: "Software Engineer", email: "email@gmail.com", img: man },
    { name: "Jane Doe", title: "Web Developer", email: "email2@gmail.com", img: woman }
  ]

  const titles =[... new Set(profiles.map(profile => profile.title))]
  const [title, setTitle] = useState("")
  const handChange = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const [search, setSearch] = useState("")
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredProfiles = profiles.filter(profile => 
    (!title || profile.title === title) && (profile.name.toLowerCase().includes(search.toLowerCase()))
  )

  const handleClick = () => {
    setTitle("")
    setSearch("")
  }

  const [mode, setMode] = useState("light")
  const handleModeClick = () => {
    (setMode(mode === "light" ? "dark" : "light"))
  }

  return (
    <>
      <div className = {mode === "light" ? "light" : "dark"}>
          <Header change = {handleModeClick}/>
          <About />
          <br></br>
          <Filters titles = {titles} onChange={handChange} searchName={handleSearch} clear = {handleClick} search = {search} title = {title}/>
          <br></br>
          <div className = "cards"> {
              filteredProfiles.map((profile, index) => (
            <Card key={profile.email} name = {profile.name} title = {profile.title} email = {profile.email} img = {profile.img}/>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default App
