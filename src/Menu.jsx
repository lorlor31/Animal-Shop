import { useState } from 'react'
import styles from './style.module.css'

export function Menu ({rubriques,vitrineFilter,setVitrineFilter}) {

    let menuColorsDefault=[true,true,true,true]
    const [menuColors,setMenuColors]=useState(menuColorsDefault)

    function changeMenuColors(){
        let nextMenuColors=[...menuColorsDefault]
        let next=nextMenuColors.map((x)=>(!x))
        setMenuColors(next)
        console.log (next)
    }

    function handleTous(){
        setVitrineFilter("tous")
        changeMenuColors() 
        alert("tous")
    }
    function handleTop(){
        setVitrineFilter("top")
        alert("top")
    }
    function handlePetit(){
        setVitrineFilter("petit")
        alert("petit")
    }
    function handlePrixCroissant(){
        setVitrineFilter("prixCroissant")
        alert("prixCroissant")
    }

    return (
        <nav className={styles.menu}>
           <ul className={styles.liste}>
                <li onClick={handleTous}
                    className= {menuColors[0]==true 
                        ? styles.li
                        : styles.liclicked
                    }

                    
                    
                >
                    Tous
                </li>
                <li onClick={handleTop}>
                    Top Ventes
                </li>
                <li onClick={handlePetit}>
                    Petit Budget
                </li>
                <li onClick={handlePrixCroissant}>
                    Prix croissants
                </li>
           </ul>

        </nav>
    )
}



