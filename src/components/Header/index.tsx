import React, { FC, ReactNode, useState } from "react"
import Modal from "../Modal";
import { RouteEnum } from "../../config/constants";
import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.svg';
import AuthForm from "../AuthorizationForm/AuthForm";
import RegistrationForm from "../AuthorizationForm/RegistartionForm";

import styles from './Header.module.scss'

 export type loginType = 'signIn'| 'signUp' | 'success' 


const Header: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [stateLogin, setStateLogin] = useState<loginType>('signIn')

    const modalContent: Record<loginType, ReactNode> = {
        'signIn': <AuthForm setStateLogin={setStateLogin}/>,
        'signUp': <RegistrationForm setStateLogin={setStateLogin}/>,
        'success': <div>Успех</div>
    }

    return (
        <>
            <header className={styles.headerContainer}>
                <Link to={RouteEnum.root}>
                    <img src={logoImg} alt="маруся" onClick={() => console.log(RouteEnum.home)} />
                </Link>
                <ul className={styles.headerNavList}>
                    <li
                        className={styles.headerNavItem}>
                        <Link className={styles.headerNavLink} to={RouteEnum.home}>Главная</Link>
                    </li>
                    <li
                        className={styles.headerNavItem}>
                        <Link className={styles.headerNavLink} to={RouteEnum.genres}>Жанры</Link>
                    </li>
                </ul>
                <button className={styles.headerButtonAuth} onClick={() => setIsOpen(true)}>Войти</button>
            </header>
            {<Modal isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}>
                     {
                        modalContent[stateLogin]
                     }

            </Modal>}
        </>
    )
}

export default Header
