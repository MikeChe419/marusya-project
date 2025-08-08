import React, { FC, useState, ChangeEvent, FormEvent, Dispatch} from "react";
import logoImg from '../../assets/images/smallLogo.svg'
import styles from  './AuthForm.module.scss'
import api from "../../api";
import { loginType } from "../Header";

export interface IAuthForm {
    setStateLogin: Dispatch<React.SetStateAction<loginType>>
}

const RegistrationForm:FC<IAuthForm> = ({setStateLogin}) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [sureName, setSureName] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (login && password && sureName && userName) {
            api.signUp(login, password, userName, sureName)
            .then(res => {
                setStateLogin('success')
            }).catch((error) =>console.log(error))
        } 
        else {
            console.log('заполните данные')
        }
    }

    return (
        <div className={styles.authWrapper}>
            <div className={styles.authTitleWrapper}>
            <img className={styles.authImg} src={logoImg} alt="Маруся" />
            <h3 className={styles.authTitle}>Маруся</h3>
            </div>
           
        <form className={styles.authForm} onSubmit={handleSubmit}>
            <input
                placeholder="Электроная почта"
                value={login}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setLogin(e.target.value)
                }}
                type="text"
                className={styles.inputField}
            />
             <input
                type="text"
                value={userName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setUserName(e.target.value)
                }}
                placeholder="Имя"
                className={styles.inputField}
            />
             <input
                type="text"
                value={sureName}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSureName(e.target.value)
                }}
                placeholder="Фамилия"
                className={styles.inputField}
            />
            <input 
                type='password'
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}
                value={password}
                placeholder="Пароль"
                className={styles.inputField}
            />
            <input 
                type='password'
                placeholder="Подтвердите пароль"
                className={styles.inputField}
            />
              <button type="submit" className={styles.authButton}>
                Зарегестрироваться
            </button>
        </form>

         <button 
            type="button" 
            className={styles.authExistUserButton}
            onClick={() => {setStateLogin('signIn')}}
            >
                У меня есть пароль
            </button>
        </div>
    )

}

export default RegistrationForm

// {
//     "email": "example@mail.com",
//     "password": "123456",
//     "name": "Иван",
//     "surname": "Петров"
// }