import React, {FC} from "react";
import { useAppSelector } from "../../store/store";

import styles from './Preview.module.scss'

const Preview:FC = () => {

    const randomMovie = useAppSelector(state => state.moviesState.randomMovie)

    console.log(randomMovie)

   const {
            releaseYear, 
            plot,
            tmdbRating, 
            trailerYoutubeId, 
  
            originalTitle,
            posterUrl,
            genres
        } = randomMovie ?? {}

        return (
            <section className={styles.preview}>
                <div className={styles.previewLeft}>
                    <div className={styles.previewData}>
                        <span>{tmdbRating}</span>
                        <span>{releaseYear}</span>
                        { !!genres?.length && 
                        genres?.map(genre => 
                        (<span key={genre}>{genre}</span>
                        ))}
                    </div>
                    <h1 className={styles.previewTitle}>{originalTitle}</h1>
                    <p>{plot}</p>
                </div>
                
                <img src={posterUrl} alt='Постер' />
            </section>
        )

}
export default Preview