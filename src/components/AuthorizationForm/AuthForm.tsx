import React, { FC, useState, FormEvent, ChangeEvent, Dispatch } from "react";
import { AxiosResponse } from "axios";
import logoImg from '../../assets/images/smallLogo.svg';
import { IRegForm } from "./RegistartionForm";
import api from "../../api";
import styles from  './AuthForm.module.scss'
import { useAppDispatch } from "../../store/store";
import { setProfile } from "../../store/profileSlice";
import { ProfileStateType } from "../../store/types";


interface IAuthForm extends IRegForm {
    setIsOpen:  Dispatch<React.SetStateAction<boolean>>
}

const AuthForm:FC<IAuthForm> = ({setStateLogin, setIsOpen}) => {
    const dispatch = useAppDispatch()

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (login && password) {
            api.signIn(login, password)
            .then(() =>  api.profile().then((res) => {
                console.log(res)
               res.data && sessionStorage.setItem('profile', JSON.stringify(res.data))
                dispatch(setProfile(res.data))
                setIsOpen(false)
            })
            ).catch((error) =>console.log(error))
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
           
        <form className={styles.authForm}  onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setLogin(e.target.value)
                }}
                className={styles.inputField}
            />
        <input 
            type='password'
            placeholder="Пароль"
            className={styles.inputField}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
            }}
            value={password}
            />
              <button type="submit" className={styles.authButton}>
                 Войти
            </button>
        </form>
          <button
                type="button"
                className={styles.authExistUserButton}
                onClick={() => { setStateLogin('signUp') }} 
          >
                Регистрация
            </button>
        </div>
    )

}

export default AuthForm