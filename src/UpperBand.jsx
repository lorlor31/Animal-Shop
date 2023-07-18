import { useState } from 'react'
import styles from './style.module.css'

export function UpperBand ({UpperBandColor}) {
    
    return (
        <div 
            className={styles.upperband}
            style={{backgroundColor: UpperBandColor }}> 

        </div>
    )
}



