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
import AboutPage from './pages/AboutPage.jsx'
import AddProfilePage from './pages/AddProfilePage.jsx'
import FetchedProfilesPage from './pages/FetchedProfilesPage.jsx'
import ProfileDetails from './pages/ProfileDetails.jsx'
import ProfilesLayout from './pages/ProfilesLayout.jsx'

import { HashRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'

const initialProfiles = [
  { name: "John Doe", title: "Software Engineer", email: "email@gmail.com", img: man },
  { name: "Jane Doe", title: "Web Developer", email: "email2@gmail.com", img: woman }
]

function App() {
  //const [count, setCount] = useState(0)

  const [profiles, setProfiles] = useState(initialProfiles);

  const addProfiles = (profile) => {
    setProfiles(prev => [...prev, profile])
  }

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
    <HashRouter>
      <Header change = {handleModeClick}/>
      <div className = {mode === "light" ? "light" : "dark"}>

          <Routes>
            <Route path="/" element={<HomePage profiles={profiles} addProfiles={addProfiles}/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/profiles" element={<AddProfilePage addProfiles={addProfiles}/>}/>
            <Route path="/fetchedProfiles" element={<ProfilesLayout />}>
              <Route index element={<FetchedProfilesPage />}/>
              <Route path="profile/:id" element={<ProfileDetails />} />
            </Route>
            
          </Routes>
      </div>
    </HashRouter>
  )
}

export default App
