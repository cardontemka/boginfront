import styles from './styles/Home.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Home = () => {
    const [links, setLinks] = useState([]);
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8287/links')
            .then((res) => {
                setLinks(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    });


    return (
        <div className={styles.contain}>
            <img src={linkIcon} className={items.linkIcon} />
            <img src={boginoo} className={items.logo} />
            <div className={styles.mainCont}>
                <div className={styles.inputCont}>
                    <input
                        type="text"
                        placeholder='https://www.web-huudas.mn'
                        className={styles.input}
                    />
                    <button className={styles.button}>БОГИНОСГОХ</button>
                </div>
                {links.length !== 0 && <p className={styles.tuuh}>Түүх</p>}
                {links &&
                    links.map((item, index) => {
                        return (
                            <div className={styles.linkCont}>
                                <div className={styles.urlCont}>
                                    <p className={styles.title}>Өгөгдсөн холбоос:</p>
                                    <p className={styles.url}>{item.url}</p>
                                </div>
                                <div className={styles.urlCont}>
                                    <p className={styles.title}>Богино холбоос:</p>
                                    <div className={styles.shortCont}>
                                        <a className={styles.url} href={`http://localhost:8287/${item.short}`}>{'http://localhost:8287/' + item.short}</a>
                                        <p className={styles.copy} onClick={() => {navigator.clipboard.writeText(`http://localhost:8287/${item.short}`)}}>Хуулж авах</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}