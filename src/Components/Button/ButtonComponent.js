import React from 'react'
import styles from './ButtonComponent.module.css'


function ButtonComponent(props) {
  return (    
      <button className={props.isPrimary ==='true' ?styles.primary_btn:styles.secondary_button}>
       
       <div>{props.icon}</div> 
        <div>{props.text}</div>
      </button>    
  )
}

export default ButtonComponent