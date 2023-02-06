import styles from './styles/ForgotPassword.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'

export const ForgotPassword = () => {
    return (
        <div className={styles.contain}>
            <img src={linkIcon} className={items.linkIcon} />
            <img src={boginoo} className={items.logo} />
            <p className={items.title}>Нууц үг сэргээх</p>
            <div className={styles.textCont}>
                <p>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</p>
            </div>
            <div className={styles.mainCont}>
                <p className={items.text}>Цахим хаяг</p>
                <input
                    type="text"
                    placeholder='name@mail.domain'
                    className={items.input}
                />
                <button className={items.button}>ИЛГЭЭХ</button>
            </div>
        </div>
    )
}