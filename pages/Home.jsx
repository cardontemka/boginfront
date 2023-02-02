import styles from './styles/Home.module.css'
import items from './styles/Items.module.css'
import boginoo from './images/Boginoo.png'
import linkIcon from './images/link.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Home = () => {
    const [links, setLinks] = useState([]);

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
        <div className={items.contain}>
            <img src={linkIcon} className={items.linkIcon} />
            <img src={boginoo} className={items.logo} />
            <div className={styles.inputCont}>
                <input
                    type="text"
                    placeholder='https://www.web-huudas.mn'
                    className={styles.input}
                />
                <button className={styles.button}>БОГИНОСГОХ</button>
                {
                    links.map((item, index) => {
                        return (
                            <div>
                                <p>{item.url}</p>
                                <a href={`http://localhost:8287/${item.short}`}>{'http://localhost:8287/' + item.short}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}