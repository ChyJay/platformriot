import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div  className={styles.home}>
        <section>
            <nav>
                <ul>
                    <li>About
                        <ul>
                         <li>Management Team</li>
                        </ul>
                        </li>
                <li>Bitcoin Minning</li>
                <li>ESS Metron</li>
                <li>Investor Relations
                    <ul>
                        <li>Overview</li>
                        <li>News & Events</li>
                        <li>Presentations</li>
                        <li>Analyst Coverage</li>
                        <li>Company Info</li>
                        <li>Financial Info</li>
                        <li>Financial Info</li>
                    </ul>
                </li>
                <li>Careers
                    <ul>
                        <li>Riot Rookie</li>
                    </ul>
                </li>
                <li>Contact Us</li>
            </ul>
         </nav>
         <h1 className={styles.text}>Building the world’s leading <br></br>
         Bitcoin-driven infrastructure platform</h1>

         <button className={styles.bot}>Corsicana Investor Tour June 13, 2024</button>
        </section>
        </div>
  )
}
