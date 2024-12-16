import React from 'react'
import styles from './MainComponent.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ButtonComponent from '../Button/ButtonComponent';


function MainComponent() {
  return (
    <div className={`container ${styles.main}`}>
      <div className={styles.section1}>
        <div className={styles.subsection1}>
          <ButtonComponent text='VIA SUPPORT CHAT' icon=<MdMessage /> isPrimary='true' ></ButtonComponent>
          <ButtonComponent text='VIA CALL' icon=<FaPhoneAlt /> isPrimary='true' ></ButtonComponent>
        </div>
        <ButtonComponent text='VIA EMAIL FORM' icon=<MdMessage /> isPrimary='false' ></ButtonComponent>

        <div className={styles.formContainer}>
          <form action="" className={styles.formstyle}>
            <div className={styles.formInput}>
              <label htmlFor="name" >Name</label>
              <input type="text" name='name' />
            </div>

            <div className={styles.formInput}>
              <label htmlFor="email">E-Mail</label>
              <input type="text" name='email' />
            </div>

            <div className={styles.formInput}>
              <label htmlFor="text">Text</label>
              <input type="textarea" name='text' style={{ height: '100px' }} />
            </div>
            <br />
            <ButtonComponent text='SUBMIT' isPrimary='true' ></ButtonComponent>

          </form>


        </div>

      </div>


      <div style={{ height: '400px' }}>
        <img src="\images\Service 24_7-pana 1.svg" alt="serviceimage" />
      </div>

    </div>
  )
}

export default MainComponent