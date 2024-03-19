import React from 'react'
import styles from"./header.module.css"
function Header() {
  return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h1>CONTACT US</h1>
        </div>
        <div className={styles.para}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis rem cum debitis. Fugit veniam perspiciatis eligendi doloremque inventore ullam quas provident libero facere! Eaque porro aperiam, qui itaque laudantium et deleniti? Ipsum, error.</p>
        </div>
    </div>
  )
}

export default Header