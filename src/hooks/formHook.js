import { useEffect, useReducer, useContext} from "react"
import { useNavigate } from "react-router-dom";
import ProfilesContext from "../contexts/ProfilesContext";
import { initialState, formReducer} from "../reducers/formReducer";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+./g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, "");

const useForm = (nameRef) => {
    
    const [state, dispatch] = useReducer(formReducer, initialState)
    const {values, errors, isSubmitting, success} = state;
    const {name, title, email, bio, img } = values;
    const navigate = useNavigate()

    
    useEffect(()=>{
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
        console.log("change")
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
        console.log("submit")
    };

    return { name, title, email, bio, img, isSubmitting, errors, success, onChange, handleSubmit }
}

export default useForm;