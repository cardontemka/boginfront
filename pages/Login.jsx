import styles from './styles/Login.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '../provider/ThemeContext'

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUserId } = useContext(ThemeContext)

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8287/login", {
                email: email,
                password: password,
            })
            .then(res => {
                if (res.status) {
                    window.localStorage.setItem('userId', res.data._id);
                    setUserId(res.data._id);
                    console.log(res.data)
                    navigate('/', {replace: true})
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
            <p className={items.title}>Нэвтрэх</p>
            <div className={styles.mainCont}>
                <label htmlFor='email-address' className={items.text}>Цахим хаяг</label>
                <input
                    type="text"
                    id='email-address'
                    placeholder='name@mail.domain'
                    label="email-address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={items.input}
                />
                <label htmlFor='password' className={items.text}>Нууц үг</label>
                <input
                    type="password"
                    id='password'
                    placeholder='••••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <button className={items.button} onClick={onSubmit}>НЭВТРЭХ</button>
            </div>
            <Link to='/signup'>
                <p className={`${items.underLine} ${items.greenText}`}>Шинэ хэрэглэгч бол энд дарна уу?</p>
            </Link>
        </div>
    )
}