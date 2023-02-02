import { NavLink } from "react-router-dom"
import styles from "./styles/Header.module.css"

export const Header = () => {
    return (
        <div className={styles.contain}>
            <NavLink to='/' className={styles.textButton}>
                ХЭРХЭН АЖИЛЛАДАГ ВЭ?
            </NavLink>
            <NavLink to='/login' className={styles.button}>
                НЭВТРЭХ
            </NavLink>
        </div>
    )
}