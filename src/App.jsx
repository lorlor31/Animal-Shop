import { useState } from 'react'
import styles from './style.module.css'
import {UpperBand} from './UpperBand'
import {Header} from './Header'
import {Menu} from './Menu'
import {Vitrine} from './Vitrine'
import { rubriques } from './Rubriques'

function App() {
  const [vitrineFilter,setVitrineFilter]=useState("tous")
  return (
    <div className={styles.wrapper}>
     <UpperBand UpperBandColor="#98EECC"/>
     <Header/>
     <Menu rubriques={rubriques} vitrineFilter={vitrineFilter} setVitrineFilter={setVitrineFilter}/>
     <Vitrine vitrineFilter={vitrineFilter}/>
    </div>
  
  )
}

export default App


//POURQUOI LE WRAPPER NE CONTIENT PAS LA VITRINE ???=> parce qu'il est en positon absolute