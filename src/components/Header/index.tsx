import React, { FC, ReactNode, useState,useEffect} from "react"
import Modal from "../Modal";
import { RouteEnum } from "../../config/constants";
import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.svg';
import AuthForm from "../AuthorizationForm/AuthForm";
import RegistrationForm from "../AuthorizationForm/RegistartionForm";
import SuccessRegistration from "../AuthorizationForm/SuccessRegistration";
import { ProfileStateType } from "../../store/types";
import styles from './Header.module.scss'

 export type loginType = 'signIn'| 'signUp' | 'success' 


const Header: FC = () => {
    const[mail, setMail] =useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [stateLogin, setStateLogin] = useState<loginType>('signIn')
    const profileString = sessionStorage.getItem('profile')
    useEffect(() => {
        if(!profileString) return
          const {email} = JSON.parse(profileString) as ProfileStateType
          !!email && setMail(email)
    }, [profileString])
   

    const modalContent: Record<loginType, ReactNode> = {
        'signIn': <AuthForm setStateLogin={setStateLogin} setIsOpen={setIsOpen}/>,
        'signUp': <RegistrationForm setStateLogin={setStateLogin}/>,
        'success': <SuccessRegistration setStateLogin={setStateLogin}/>
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
                {mail ?  <Link className={styles.headerNavLink} to={RouteEnum.office}>{mail}</Link> :
                <button className={styles.headerButtonAuth} onClick={() => setIsOpen(true)}>Войти</button>}
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
