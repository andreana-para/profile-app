import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ProfileDetails = () => {
    
    const [profile, setProfile] = useState(null)
    const { id } = useParams()

    useEffect(()=>{
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    },[id])
    
    return (
        profile ? (
            <>
                <h1>Profile of {profile.name} </h1>
                <img src={profile.image_url} alt={profile.name} />
                <p>{profile.title}</p>
                <p>{profile.email}</p>
                <p>{profile.bio}</p>
            </>
        ) : (
                <>
                    <p>Loading...</p>
                </>
            )
    )
}
export default ProfileDetails