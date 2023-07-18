import { useState } from 'react'
import styles from './style.module.css'
import {animals} from './Animals'

export function Vitrine ({vitrineFilter}) {
    let animalsCopy=[...animals]
    let isVisible=false
    let tab=Array.from(animals,x=>(isVisible))
    const [animalDescription,setAnimalDescription]=useState(tab)
    //let tab=Array.from(animals,x=>("animalDescriptionHidden"))
    // function handleMouseEnter(index) {
    //     let nextAnimalDescription=[...animalDescription]
    //     nextAnimalDescription[index]=="animalDescriptionHidden" 
    //         ? nextAnimalDescription[index]="animalDescriptionVisible"
    //         : nextAnimalDescription[index]="animalDescriptionHidden"
    //     setAnimalDescription(nextAnimalDescription)
    //     console.log(nextAnimalDescription)
    // }

    function handleMouseMove(index) {
        let nextAnimalDescription=[...animalDescription]
        nextAnimalDescription[index]=!nextAnimalDescription[index]
        setAnimalDescription(nextAnimalDescription)
        console.log(nextAnimalDescription)
    }

    if (vitrineFilter=="tous") {}
    if (vitrineFilter=="top") {
        animalsCopy=animals.filter((animal)=>animal.popularité=="+++")
        console.log(animalsCopy)
}
    if (vitrineFilter=="petit") {
        animalsCopy=animals.filter((animal)=>animal.prix<=100)
        console.log(animalsCopy)
    }

    if (vitrineFilter=="prixCroissant") {
        animalsCopy=animals.sort(function(a,b){return (a.prix-b.prix)})
        console.log(animalsCopy)
    }

        return (
            <div className={styles.vitrine}>
            {animalsCopy.map((animal,index)=>
                
                    <div key={animal.id} className={styles.animal}>
                        <h1 className={styles.animalH1}> {animal.nom}</h1>
                        <button 
                            onMouseEnter={()=>handleMouseMove(index)} 
                            onMouseLeave={()=>handleMouseMove(index)} 
                            className={styles.animalQuestionMark}> ? 
                        </button>
                        <img className={styles.animalPic} src={animal.src}></img>
                        <span className={styles.animalPrice}> Prix : {animal.prix} $ </span>
                        <p className= {animalDescription[index]==true 
                        ? styles.animalDescriptionVisible
                        : styles.animalDescriptionHidden }>
                            {animal.description}
                        </p>
                    
                    </div>
                
                    
                
            )}
            </div>
        )
    

}



