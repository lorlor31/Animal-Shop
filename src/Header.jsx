import { useState } from 'react'
import styles from './style.module.css'

export function Header ({}) {
    
    return (
        <>
        <div className={styles.header} >
            <div className={styles.titre}>
                ANIMAL SHOP 
            </div>

            <div className={styles.texteTitre}>
            Ils sont tous craquants !
            </div>
        </div>
        </>
     
    )
}


