import React from "react"
import { FC } from "react"
import  styles from  './Header.module.scss'


const Header:FC = () => {
    return (

            <header className={styles.headerContainer}>
                <h1 className={styles.header}>маруся</h1>
                {/* <h1 className={styles.header}>хИДЕР</h1> */}
            </header>
          

    )
}

export default Header

