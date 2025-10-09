import AddProfile from "../components/AddProfile"
import { useState, useContext, useMemo, useCallback} from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import ProfilesContext from '../contexts/ProfilesContext.jsx'


const HomePage = () => {

    const {profiles} = useContext(ProfilesContext);
    console.log(profiles)

    const titles = useMemo(() => { 
        return [... new Set(profiles.map(profile => profile.title))];
    }, []);
    const [title, setTitle] = useState("");
    
    const handChange = useCallback((event) => {
        setTitle(event.target.value)
        console.log(title)
    }, [])

    const [search, setSearch] = useState("")
    const handleSearch = useCallback((event) => {
        setSearch(event.target.value)
    }, [])

    const filteredProfiles = useMemo (() => { return profiles.filter
        (profile =>
            (!title || profile.title === title) && (profile.name.toLowerCase().includes(search.toLowerCase()))
    )}, []);

    const handleClick = useCallback(() => {
        setTitle("")
        setSearch("")
    }, [])

    return (
        <>
            <h1>Profile App</h1>
            <AddProfile />
            <br></br>
            <Filters 
                titles={titles} 
                onChange={handChange} 
                searchName={handleSearch} 
                clear={handleClick} 
                search={search} 
                title={title} 
            />
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