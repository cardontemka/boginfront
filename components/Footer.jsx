import styles from "./styles/Footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.text}>Made with ♥️ by Pinecone Academy</div>
            <p className={styles.name}>©boginoo.io 2023</p>
        </div>
    )
}