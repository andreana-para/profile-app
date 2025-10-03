import { useState, useContext, useReducer, useRef, useLayoutEffect } from 'react';
import styles from '../styles/AddProfile.module.css'
import { useNavigate } from 'react-router-dom';
import ProfilesContext from '../contexts/ProfilesContext';
import { initialState, formReducer} from "../reducers/formReducer";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+./g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, "");

const initialValues = {
    name: "",
    title: "",
    email: "",
    bio: "",
    img: null,
}



const AddProfile = () => {
    // const [values, setValues] = useState(initialValues)
    // const {name, title, email, bio, img} = values;
    // const [error, setErrors] = useState("")
    // const [isSubmitting, setSubmitting] = useState(false)
    // const [success, setSuccess] = useState("")

    const [state, dispatch] = useReducer(formReducer, initialState)
    const {values, errors, isSubmitting, success} = state;
    const {name, title, email, bio, img } = values;
    const navigate = useNavigate()

    const nameRef = useRef(null)
    useLayoutEffect(()=>{
        console.log(nameRef)
        nameRef.current.focus()
    }, [])

    const { addProfiles } = useContext(ProfilesContext);

    const onChange = (event) => {
        if(event.target.name === "image"){
            const file = event.target.files[0]
            // if (file && file.size < 1024*1024) {
            //     setErrors ("");
            //     setValues(prev => ({...prev, img: file}));
            // } else {
            //     setErrors ("File needs to be less than 1MB.");
            //     setValues((prev) => ({...prev, img: null}));
            // }
            const isFileOK = file && file.size < 1024*1024
            dispatch({type: "SET_IMG", payload: isFileOK ? file : null})
        } else {
            // setValues( (prev) => ({
            //     ...prev, 
            //     [event.target.name]: event.target.value
            // }));
            const {name, value} = event.target;
            dispatch({type: "SET_VALUES", payload: {name, value} })
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setSubmitting(true);
        dispatch({type: "START_SUBMITTING"})
        try {
            const cleanedValues = {
                name: stripTags(trimCollapse(name)),
                title: stripTags(trimCollapse(title)),
                email: stripTags(trimCollapse(email)),
                bio: stripTags(bio.trim()),
                img: img ? URL.createObjectURL(img) : "",
            };
            addProfiles(cleanedValues);
            // setSuccess("Form has been submitted successfully.");
            // setValues(initialValues);
            dispatch({type: "SUBMIT_SUCCESS"})
            setTimeout(()=> {
                // setSuccess("");
                dispatch({type: "CLEAR_SUCCESS"})
            }, 1000)
            event.currentTarget.reset();
            navigate("/")
        } catch(error) {
            // setErrors("Something is wrong.")
            dispatch({type: "HAS_ERROR"})
        } finally {
            // setSubmitting(false);
            dispatch({type: "FINISH_SUBMIT"})
        }

    }


    return (
        <div className={styles.addNewProfile}>
            <h2>Add Profile</h2>
            <form onSubmit={handleSubmit} className={styles.addProfileForm}>
                <label htmlFor = "name">Name:</label>
                <input ref = {nameRef} type = "text" name = "name" id = "name" required value = {name} onChange = {onChange} />
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