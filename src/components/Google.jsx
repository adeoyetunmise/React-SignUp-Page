import React from 'react'
import styles from '../Google/google.module.css'
const Google = () => {
  return (
    <>
    
    <div className={styles.container}>
        <h1 className={styles.google}>Google</h1>
        {/* <i class="fa fa-search" style={{color:'white'}}></i> */}
        <input type="text" className={styles.input} />
    
        
        <div className={styles.sea}>
        <div className={styles.search}>Google Search</div>
        <div className={styles.lucky}>I'm Feeling Lucky</div>
        </div>
        <p className={styles.dev}>Develop skills for in-demand jobs with<a href='#'> Google Career Certificates</a></p>
        <p className={styles.offer}>Google offered in: <a href='#'>Hausa Igbo Ede Yoruba Nigeria Pidgin</a></p>
    </div>
  
    </>
  )
}

export default Google