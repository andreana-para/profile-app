import { useState, createContext } from 'react';
import man from '../assets/man.jpg';
import woman from '../assets/woman.jpg';

const ProfilesContext = createContext();

export default ProfilesContext;

const initialProfiles = [
  { name: "John Doe", title: "Software Engineer", email: "email@gmail.com", img: man },
  { name: "Jane Doe", title: "Web Developer", email: "email2@gmail.com", img: woman }
]

export const ProfilesProvider = ({children}) => {

    const [profiles, setProfiles] = useState(initialProfiles);
    const addProfiles = (profile) => {
        setProfiles(prev => [...prev, profile])
    }

    return <ProfilesContext.Provider  value = {{profiles, addProfiles}}> 
        {children}
    </ProfilesContext.Provider>
}