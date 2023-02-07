import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ThemeContext } from "../provider/ThemeContext";
import styles from "./styles/Header.module.css"

export const Header = () => {
    const [email, setEmail] = useState('');
    const { setUserId } = useContext(ThemeContext)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8287/user/${window.localStorage.getItem('userId')}`)
            .then(res => {
                setEmail(res.data.email);
            })
            .catch(error => {
                console.log(error);
            })
    })

    const logout = () => {
        setUserId('')
        localStorage.removeItem('userId')
        navigate('/')
    }
    return (
        <div className={styles.contain}>
            <NavLink to='/' className={styles.textButton}>
                ХЭРХЭН АЖИЛЛАДАГ ВЭ?
            </NavLink>
            {email ?
                <div className={styles.button} onClick={logout}>
                    {email}
                </div>
                :
                <NavLink to='/login' className={styles.button}>
                    НЭВТРЭХ
                </NavLink>
            }
        </div>
    )
}