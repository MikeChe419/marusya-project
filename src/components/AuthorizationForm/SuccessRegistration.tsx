import React, { FC, useState, ChangeEvent, FormEvent, Dispatch} from "react";
import logoImg from '../../assets/images/smallLogo.svg'
import styles from  './AuthForm.module.scss'
import { IRegForm } from "./RegistartionForm";

const SuccessRegistration:FC<IRegForm> = ({setStateLogin}) => {

    return (
        <div className={styles.authWrapper}>
            <div className={styles.authTitleWrapper}>
            <img className={styles.authImg} src={logoImg} alt="Маруся" />
            <h3 className={styles.authTitle}>Маруся</h3>
            <h3 className={styles.successTitle}>Маруся</h3>
            <p className={styles.successText}>Используйте вашу электронную почту для входа</p>
            </div>
          
         <button 
            type="button" 
            className={styles.authExistUserButton}
            onClick={() => {setStateLogin('signIn')}}
            >
                Войти
            </button>
        </div>
    )

}

export default SuccessRegistration
