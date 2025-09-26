import { useState } from 'react';
import styles from '../styles/AddProfile.module.css'
import { useNavigate } from 'react-router-dom';

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+./g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, "");

const initialValues = {
    name: "",
    title: "",
    email: "",
    bio: "",
    img: null,
}



const AddProfile = ({ addProfiles }) => {
    const [values, setValues] = useState(initialValues)
    const {name, title, email, bio, img} = values;
    const [errors, setErrors] = useState("")
    const [isSubmitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState("")

    const navigate = useNavigate()

    const onChange = (event) => {
        if(event.target.name === "image"){
            const file = event.target.files[0]
            if (file && file.size < 1024*1024) {
                setErrors ("");
                setValues(prev => ({...prev, img: file}));
            } else {
                setErrors ("File needs to be less than 1MB.");
                setValues((prev) => ({...prev, img: null}));
            }
        } else {
            setValues( (prev) => ({
                ...prev, 
                [event.target.name]: event.target.value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const cleanedValues = {
                name: stripTags(trimCollapse(name)),
                title: stripTags(trimCollapse(title)),
                email: stripTags(trimCollapse(email)),
                bio: stripTags(bio.trim()),
                img: img ? URL.createObjectURL(img) : "",
            };
            addProfiles(cleanedValues);
            setSuccess("Form has been submitted successfully.");
            setValues(initialValues)
            setTimeout(()=> {
                setSuccess("");
            }, 1000)
            event.currentTarget.reset();
            navigate("/")
        } catch(error) {
            setErrors("Something is wrong.")
        } finally {
            setSubmitting(false);
        }

    }


    return (
        <div className={styles.addNewProfile}>
            <h2>Add Profile</h2>
            <form onSubmit={handleSubmit} className={styles.addProfileForm}>
                <label htmlFor = "name">Name:</label>
                <input type = "text" name = "name" id = "name" required value = {name} onChange = {onChange} />
                <label htmlFor = "title">Title:</label>
                <input type = "text" name = "title" id = "title" required value = {title} onChange = {onChange}/>
                <label htmlFor = "email">Email:</label>
                <input type = "text" name = "email" id = "email" required value = {email} onChange = {onChange}/>
                <label htmlFor = "bio">Bio:</label>
                <textarea name = "bio" id = "bio" placeholder = "Add bio..." required value = {bio} onChange = {onChange}></textarea>
                <label htmlFor = "image">Image:</label>
                <input type = "file" name = "image" id = "image" onChange = {onChange}/>
                <br></br>
                <button className = {styles.submitButton}
                    type="submit" 
                    disabled={isSubmitting || 
                        !stripTags(trimCollapse(name)) || 
                        !stripTags(trimCollapse(title)) ||
                        !stripTags(trimCollapse(email)) ||
                        !stripTags(bio).trim() ||
                        !img
                    }
                    >Add Profile</button>
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    )
}

export default AddProfile;