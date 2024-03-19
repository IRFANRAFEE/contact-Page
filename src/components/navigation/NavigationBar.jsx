import React from 'react'
import styles from"./Navigation.module.css"
function Navigation() {
    // console.log(styles);
  return (
    <nav className={styles.navigation}>
        <div className={styles.imgDev}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAArElEQVR4AWKgORgFo2AUiIqKEq9YAQwIKGpsaCDGrPDw8KlTp3Z0dLi5uRFWevLkSVyysrKyFRUVRw4ffvHixerVq21sbIjyy8MHD65fu4YmGBAQsGD+fEB79G0AMAgDAVDjsBgdFYuwjT0Zbt/vnHMOVxL1ErcARN4752Q+XkaKVRhjGI1Vo8DPtNaylLUWfZi3atxS7BFqmJSplVKyEQcVBgHjs2r5/X53EANqC3Mn0vJGwwAAAABJRU5ErkJggg==" alt="" srcset="" />
        </div>
        <div className={styles.list}> 
            <ul className={styles.unorderdList}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation