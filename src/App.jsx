import { useState, useContext, lazy, Suspense } from 'react'
import './App.css'
import Header from './components/Header'
import AboutPage from './pages/AboutPage.jsx'
import AddProfilePage from './pages/AddProfilePage.jsx'
import FetchedProfilesPage from './pages/FetchedProfilesPage.jsx'
//import ProfileDetails from './pages/ProfileDetails.jsx'
import ProfilesLayout from './pages/ProfilesLayout.jsx'
import ModeContext from './contexts/ModeContext.jsx'

import { HashRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'

// const initialProfiles = [
//   { name: "John Doe", title: "Software Engineer", email: "email@gmail.com", img: man },
//   { name: "Jane Doe", title: "Web Developer", email: "email2@gmail.com", img: woman }
// ]

const LazyComponent = lazy(() => import("./pages/ProfileDetails"))

function App() {
  //const [count, setCount] = useState(0)

  // const titles =[... new Set(profiles.map(profile => profile.title))]
  // const [title, setTitle] = useState("")
  // const handChange = (event) => {
  //   setTitle(event.target.value)
  //   console.log(title)
  // }

  // const [search, setSearch] = useState("")
  // const handleSearch = (event) => {
  //   setSearch(event.target.value)
  // }

  // const filteredProfiles = profiles.filter(profile => 
  //   (!title || profile.title === title) && (profile.name.toLowerCase().includes(search.toLowerCase()))
  // )

  // const handleClick = () => {
  //   setTitle("")
  //   setSearch("")
  // }

  // const [profiles, setProfiles] = useState(initialProfiles);
  // const addProfiles = (profile) => {
  //   setProfiles(prev => [...prev, profile])
  // }
  
  // const [mode, setMode] = useState("light")
  // const handleModeClick = () => {
  //   (setMode(mode === "light" ? "dark" : "light"))
  // }

  const { mode } = useContext(ModeContext);
  
  return (
    <HashRouter>
      <Header />
      <div className = {mode === "light" ? "light" : "dark"}>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/profiles" element={<AddProfilePage />}/>
            <Route path="/fetchedProfiles" element={<ProfilesLayout />}>
              <Route index element={<FetchedProfilesPage />}/>
              
              <Route path="profile/:id" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </Suspense>} />
            
            </Route>
            
          </Routes>
      </div>
    </HashRouter>
  )
}

export default App