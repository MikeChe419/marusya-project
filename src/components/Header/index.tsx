import React from "react"
import { FC } from "react"
import  styles from  './Header.module.scss'
import logoImg from '../../assets/images/logo.svg';


const Header:FC = () => {
    return (

            <header className={styles.headerContainer}>
                <img src={logoImg} alt="маруся" />
                <h1 className={styles.header}>маруся</h1>

            </header>
          

    )
}

export default Header

