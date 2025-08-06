import React, {FC} from "react";
import styles from './Main.module.scss';
import axios from "axios";

const Main:FC = () => {

    axios({
        method: 'get',
        url: 'https://cinemaguide.skillbox.cc/movie',
    }).then(res => console.log(res))

    return (
        <h1 className={styles.mainTitle}>Шерлок Холмс и доктор Ватсон</h1>

    )
    
}

export default Main