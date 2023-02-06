import styles from './styles/Sign.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'
import { useState } from 'react'

export const Sign = () => {
    const [email, setEmail] = useState('')
    return (
        <div className={styles.contain}>
            <img src={linkIcon} className={items.linkIcon} />
            <img src={boginoo} className={items.logo} />
            <p className={items.title}>Бүртгүүлэх</p>
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
                <p className={items.text}>Нууц үгээ давтна уу</p>
                <input
                    type="password"
                    placeholder='••••••••••'
                    className={items.input}
                />
                <button className={items.button}>БҮРТГҮҮЛЭХ</button>
            </div>
        </div>
    )
}