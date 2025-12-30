import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./HamburgerMenu.module.css";


export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);


    const toggleMenu = () => setOpen(!open);


    useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and click is outside menu AND button
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);
    

    return (
        <>
            <button className={styles.hamburger} onClick={toggleMenu} ref={buttonRef}>
                {open ? <FaTimes size={24} /> : <FaBars size={24} />} 
            </button>

            <nav ref={menuRef} className={`${styles.menu} ${open ? styles.open : ""}`}>
                <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setOpen(false)}>About</a>
                <a href="#exploring" onClick={() => setOpen(false)}>Exploring</a>
            </nav>
        </>

    )
}