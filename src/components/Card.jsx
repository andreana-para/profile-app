import imgMan from '../assets/man.jpg'
import styles from '../styles/card.module.css'

const Card = ({name, title, img}) => {
    // const name = "John Doe"
    // const tittle = "Software Engineer";
    // const email = ""

    return (<div className={styles.card}>
        <img src={img} className = {styles.images} alt="Headshot of a man" />
        <h2>{name}</h2>
        <p>{title}</p>
    </div>)
}

export default Card;