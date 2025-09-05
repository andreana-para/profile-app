import imgMan from '../assets/man.jpg'

const Card1 = () => {
    return (<div className="card"
            style = {{
                backgroundColor: '#dedede',
            }}
        >
        <img src={imgMan} 
        alt="Headshot of a man" 
        style= {{
            width: '50px',
            height: '120px'
        }}/>
        <h2>John Doe</h2>
        <p>Job</p>
    </div>)
}

export default Card1;