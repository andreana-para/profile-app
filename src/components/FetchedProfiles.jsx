import { useState, useEffect } from 'react';
import Filters from './Filters';
import Card from './Card'
import {Link } from "react-router-dom"


const FetchedProfiles = () => {

    const [titles, setTitles] = useState([])
    const [title, setTitle] = useState("")
    const [search, setSearch] = useState("")
    const [fetchedProfiles, setFetchedProfiles] = useState([])

    useEffect(() => {
        fetch("https://web.ics.purdue.edu/%7Ezong6/profile-app/get-titles.php")
        .then(res => res.json())
        .then(data => setTitles(data.titles))
    },[])

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&limit=1000`)
        .then(res => res.json())
        .then(data => setFetchedProfiles(data.profiles))
    },[title, search])


    const handChange = (event) => {
        setTitle(event.target.value)
      }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    
    const handleClick = () => {
        setTitle("")
        setSearch("")
      }

    return (
        <>
            <Filters 
            titles = {titles} 
            onChange={handChange} 
            searchName={handleSearch} 
            clear = {handleClick} 
            search = {search} 
            title = {title}
            />
            <br></br>
            <div className = "cards"> 
                { fetchedProfiles.map((profile) => (
                    <Link key = {profile.id} to={`/fetchedProfiles/profile/${profile.id}`}>

                <Card 
                    key={profile.id} 
                    name = {profile.name} 
                    title = {profile.title} 
                    email = {profile.email} 
                    img = {profile.image_url}
                />

                </Link>
                ))}
            </div>
        </>
    );

}

export default FetchedProfiles;