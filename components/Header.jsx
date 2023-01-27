import styles from "./styles/Header.module.css"

export const Header = () => {
    return (
        <div className={styles.contain}>
            <p className={styles.textButton}>
                ХЭРХЭН АЖИЛЛАДАГ ВЭ?
            </p>
            <button className={styles.button}>
                НЭВТРЭХ
            </button>
        </div>
    )
}