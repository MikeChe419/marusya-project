import React, { FC } from "react"
// import { NavLink, useNavigate } from "react-router-dom";
// import { RouteEnum } from "../../config/constants";
import  styles from  './Header.module.scss'
import logoImg from '../../assets/images/logo.svg';


const Header:FC = () => {
    // const navigate = useNavigate()

    return (
       
            <header className={styles.headerContainer}>
                <img src={logoImg} alt="маруся"  />
            </header>
          

    )
}

export default Header

