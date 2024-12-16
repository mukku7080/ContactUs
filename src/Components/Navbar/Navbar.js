import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
    console.log(styles)
    return (
        
        <nav className= {`container ${styles.navbar}`} >
            <div>
                <img src="./images/Frame 2 1.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </nav>

    )
}

export default Navbar