import styles from './styles/Home.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'

export const Home = () => {
    return (
        <div className={styles.contain}>
            <img src={linkIcon} className={styles.linkIcon}/>
            <img src={boginoo} className={styles.logo}/>
            <div className={styles.inputCont}>
                <input
                    type="text"
                    placeholder='https://www.web-huudas.mn'
                    className={styles.input}
                />
                <button className={styles.button}>БОГИНОСГОХ</button>
            </div>
        </div>
    )
}