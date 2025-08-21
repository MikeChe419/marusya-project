import React, {FC, useEffect} from "react";
import { useAppDispatch } from "../../store/store";
import Preview from "../Preview/Preview";
import { setRandomMovie, setTopMoviesList } from "../../store/moviesSlice";
import api from "../../api";

import styles from './Main.module.scss';

const Main:FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        api.getRandomMovie().then(res => res.data &&
             dispatch(setRandomMovie(res.data)))
             .catch(error => console.log(error))

        api.moviesTop().then(res => res.data &&
             dispatch(setTopMoviesList(res.data)))
        .catch(error => console.log(error))
    }, [])

    return (
        <main className={styles.main}>
            <Preview/>
        </main>
    )

}

export default Main