"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./button.module.scss";

export const Button = () => {
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return (
    <button className={styles.wrapper} onClick={scrollToTop  }>
      Back
    </button>
  );
};
