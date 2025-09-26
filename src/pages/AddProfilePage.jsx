import AddProfile from '../components/AddProfile'

const AddProfilePage = ({addProfiles}) => {
    return (
        <>
        <h1>Add Profile Page</h1>
        <AddProfile addProfiles={addProfiles}/>
        </>
        
    )
}

export default AddProfilePage;