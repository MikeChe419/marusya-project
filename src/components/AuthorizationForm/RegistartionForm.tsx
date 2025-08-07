import React, { FC, Dispatch } from "react";
import logoImg from '../../assets/images/smallLogo.svg'
import styles from  './AuthForm.module.scss'

export interface IAuthForm {
    setIsExistUser: () => void;
}

const RegistrationForm:FC<IAuthForm> = ({setIsExistUser}) => {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authTitleWrapper}>
            <img className={styles.authImg} src={logoImg} alt="Маруся" />
            <h3 className={styles.authTitle}>Маруся</h3>
            </div>
           
        <form className={styles.authForm}>
            <input
                placeholder="Электроная почта"
                type="text"
                className={styles.inputField}
            />
             <input
                type="text"
                placeholder="Имя"
                className={styles.inputField}
            />
             <input
                type="text"
                placeholder="Фамилия"
                className={styles.inputField}
            />
        <input 
            type='password'
            placeholder="Пароль"
            className={styles.inputField}
            />
            <input 
            type='password'
            placeholder="Подтвердите пароль"
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
                У меня есть пароль
            </button>
        </div>
    )

}

export default RegistrationForm