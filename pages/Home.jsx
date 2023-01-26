import styles from './styles/Home.module.css'
import boginoo from './images/Boginoo.png'

export const Home = () => {
    return (
        <div className={styles.contain}>
            <img src={boginoo} className={styles.logo}/>
        </div>
    )
}