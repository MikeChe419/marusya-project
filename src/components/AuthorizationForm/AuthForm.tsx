import React, { FC } from "react";

import logoImg from '../../assets/images/smallLogo.svg';
import { IAuthForm } from "./RegistartionForm";
import styles from  './AuthForm.module.scss'

const AuthForm:FC<IAuthForm> = ({setIsExistUser}) => {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authTitleWrapper}>
            <img className={styles.authImg} src={logoImg} alt="Маруся" />
            <h3 className={styles.authTitle}>Маруся</h3>
            </div>
           
        <form className={styles.authForm}>
            <input
                type="text"
                placeholder="Логин"
                // value={title}
                // onChange={(event) => {
                //     setTitle(event.target.value);
                //     if (error) {
                //         setError('');
                //     }
                // }}
                className={styles.inputField}
            />
        <input 
            type='password'
            placeholder="Пароль"
            className={styles.inputField}
            />
              <button type="submit" className={styles.authButton}>
                 Войти
            </button>
        </form>
          <button
                type="button"
                className={styles.authExistUserButton}
                onClick={setIsExistUser}
          >
                Регистрация
            </button>
        </div>
    )

}

export default AuthForm