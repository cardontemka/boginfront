import styles from './styles/Sign.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ThemeContext } from '../provider/ThemeContext'

export const Sign = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const { setUserId } = useContext(ThemeContext)

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8287/sign", {
                email: email,
                password: password,
            })
            .then(res => {
                if (password === verifyPassword) {
                    window.localStorage.setItem('userId', res.data._id);
                    setUserId(res.data._id);
                    console.log(res.data)
                    navigate('/', { replace: true })
                } else {
                    console.log('password is incorrect')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className={styles.contain}>
            <img src={linkIcon} className={items.linkIcon} />
            <img src={boginoo} className={items.logo} />
            <p className={items.title}>Бүртгүүлэх</p>
            <div className={styles.mainCont}>
                <label htmlFor='email-address' className={items.text}>Цахим хаяг</label>
                <input
                    id='email-address'
                    type="text"
                    placeholder='name@mail.domain'
                    className={items.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password' className={items.text}>Нууц үг</label>
                <input
                    id='password'
                    type="password"
                    placeholder='••••••••••'
                    className={items.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='verifyPassword' className={items.text}>Нууц үгээ давтна уу</label>
                <input
                    id='verifyPassword'
                    type="password"
                    placeholder='••••••••••'
                    className={items.input}
                    value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}
                />
                <button className={items.button} onClick={onSubmit}>БҮРТГҮҮЛЭХ</button>
            </div>
        </div>
    )
}