import imgMan from '../assets/man.jpg'

const Card = ({name, title, email, img}) => {
    // const name = "John Doe"
    // const tittle = "Software Engineer";
    // const email = ""

    return (<div className="card"
            style = {{
                backgroundColor: '#dedede',
            }}
        >
        <img src={img} 
        alt="Headshot of a man" 
        style= {{
            width: '50px',
            height: '120px'
        }}/>
        <h2>{name}</h2>
        <p>{title}</p>
    </div>)
}

export default Card;