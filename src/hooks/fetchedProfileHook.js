import { useEffect, useState } from "react"
 

const useFetchedProfiles = () => {
    const [titles, setTitles] = useState([])
    const [title, setTitle] = useState("")
    const [search, setSearch] = useState("")
    const [fetchedProfiles, setFetchedProfiles] = useState([])

    useEffect(() => {
        fetch("https://web.ics.purdue.edu/%7Ezong6/profile-app/get-titles.php")
            .then(res => res.json())
            .then(data => setTitles(data.titles))
    }, [])

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&limit=1000`)
            .then(res => res.json())
            .then(data => setFetchedProfiles(data.profiles))
    }, [title, search])


    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = () => {
        setTitle("")
        setSearch("")
    }

    return {handleChange, handleSearch, handleClick, title, search, titles, fetchedProfiles}
}

export default useFetchedProfiles;