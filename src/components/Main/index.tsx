import React, {FC, useEffect, useState} from "react";
import styles from './Main.module.scss';
import api from "../../api";

const Main:FC = () => {

    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        api.movie().then(res => res.data && setMovies(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
        <ul>
        {
            !!movies.length && movies.map((el, i) => (
                <li key={i}>{el.title}</li>
            ))
        }
        </ul>
        </>
    )

}

export default Main