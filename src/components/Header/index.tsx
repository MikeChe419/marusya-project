import React, { FC } from "react"
import { RouteEnum } from "../../config/constants";
import  styles from  './Header.module.scss'
import logoImg from '../../assets/images/logo.svg';


const Header:FC = () => {

    return (
            <header className={styles.headerContainer}>
                <img src={logoImg} alt="маруся" onClick={() => console.log(RouteEnum.home)}/>
            </header>
          

    )
}

export default Header

