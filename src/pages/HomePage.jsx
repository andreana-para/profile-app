import AddProfile from "../components/AddProfile"
import { useState } from 'react'
import Filters from '../components/Filters'
import man from '../assets/man.jpg'
import woman from '../assets/woman.jpg'
import Card from '../components/Card'


const HomePage = ({profiles, addProfiles}) => {

    const titles = [... new Set(profiles.map(profile => profile.title))]
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

    return (
        <>
            <h1>Profile App</h1>
            <AddProfile addProfiles={addProfiles} />
            <br></br>
            <Filters titles={titles} onChange={handChange} searchName={handleSearch} clear={handleClick} search={search} title={title} />
            <br></br>
            <div className="cards"> {
                filteredProfiles.map((profile, index) => (
                    <Card key={profile.email} name={profile.name} title={profile.title} email={profile.email} img={profile.img} />
                ))
            }
            </div>
        </>
    )
}

export default HomePage