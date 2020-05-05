import React from 'react'
import styles from "./overlay.module.scss"

const Overlay = props => 
  <div 
    className={styles.overlay}
    onClick={props.onClickOverlay}
  />

export default Overlay

