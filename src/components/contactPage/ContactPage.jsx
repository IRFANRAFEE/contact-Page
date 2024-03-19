import React from 'react'
import styles from "./contactPage.module.css"
import Buttons from '../Buttons/Buttons'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5"
import { useState } from 'react';
function ContactPage() {
const [submittedsucessfully,setSubmittedSucessfully]=useState("")
  function onsubmit(e){
e.preventDefault()
setSubmittedSucessfully("your form is submitted sucessfully");
console.log("submitted successsfuly");

  }
   
  return (
    <section className={styles.mainSection}>
        <div className={styles.contactPage}>
            <div className={styles.topbtn}>
            <Buttons text="VIA CHAT" icon={<MdMessage fontSize={"24px"} />}></Buttons>
            <Buttons text="VIA CALL" icon={<IoCallOutline  fontSize={"24px"}/>}></Buttons>
            </div>
            <Buttons
            isoutline={true}
            text="VIA EMAIL FORM" icon={<IoCallOutline  fontSize={"24px"}/>}></Buttons>
              <div className={styles.formHandler}>
        <form className={styles.form} onSubmit={onsubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' className={styles.text}/>
            <label htmlFor="email">email</label>
            <input type="email" name='Email' className={styles.text}/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id=""className={styles.textArea}></textarea>
            <Buttons text="Submit" type="submit" ></Buttons>
            </form>
            <div>{submittedsucessfully}</div>
            
        </div>
        </div>
      
        <div  className={styles.imageContainer}>
            <img src="https://media.istockphoto.com/id/1210501575/vector/male-hotline-operator-advises-client.jpg?s=1024x1024&w=is&k=20&c=UmGcmrwIr5PxDSVqp8aHH3ivsOYkn2S_Ka12pPIkR04=" alt="" srcset="" />
        </div>
    </section>
  )
}

export default ContactPage