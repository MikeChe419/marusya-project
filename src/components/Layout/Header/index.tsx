import React from "react"
import { FC } from "react"
import  styles from  './Header.module.scss'


const Header:FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <h1 className={styles.header}>хИДЕР</h1>
                <div className={styles.headerWrap}>Проверка на переполнение когда текст очень длинный и его нужно корректно отобразить</div>
                {/* <h1 className={styles.header}>хИДЕР</h1> */}
            </header>
          
        </div>
    )
}

export default Header

