import styles from './styles/Login.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className={styles.contain}>
            <img src={linkIcon} className={items.linkIcon} />
            <img src={boginoo} className={items.logo} />
            <p className={items.title}>Нэвтрэх</p>
            <div className={styles.mainCont}>
                <p className={items.text}>Цахим хаяг</p>
                <input
                    type="text"
                    placeholder='name@mail.domain'
                    className={items.input}
                />
                <p className={items.text}>Нууц үг</p>
                <input
                    type="password"
                    placeholder='••••••••••'
                    className={items.input}
                />
                <div className={styles.recomendCont}>
                    <label className={styles.checkCont}>
                        <input type="checkbox" className={styles.check} />
                        <p className={items.greenText}>Намайг сана</p>
                    </label>
                    <Link to='/forgotpass'>
                        <p className={items.underLine}>Нууц үгээ мартсан</p>
                    </Link>
                </div>
                <button className={items.button}>НЭВТРЭХ</button>
            </div>
            <Link to='/signup'>
                <p className={`${items.underLine} ${items.greenText}`}>Шинэ хэрэглэгч бол энд дарна уу?</p>
            </Link>
        </div>
    )
}