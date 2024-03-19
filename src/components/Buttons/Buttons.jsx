import React from 'react'
import styles from "./Buttons.module.css"

function Buttons({text, icon,isoutline}) {
  return (
    <div>
    <button className={isoutline?styles.mybtnsoutline:styles.mybtns}>
    {icon}
    {text}
        
         </button>
    </div>
  )
}

export default Buttons