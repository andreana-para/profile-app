import imgMan from '../assets/woman.jpg'

const Card2 = () => {
    return (<div className="card card2"
                style = {{
                    backgroundColor: '#dedede',
                }}>
        <img src={imgMan} 
        alt="Headshot of a woman" 
        style= {{
            width: '50px',
            height: '120px'
        }}/>
        <h2>Jane Doe</h2>
        <p>Job</p>
    </div>)
}

export default Card2;