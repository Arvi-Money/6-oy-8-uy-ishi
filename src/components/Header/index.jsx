import './index.css'
import sun from '../../assets/sun-regular.svg'
import  moon from '../../assets/moon.svg'
import { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";


function Header() {
    const {t, i18n} = useTranslation();
    const selectRef = useRef("");

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'dark') {
            enableDarkMode();
        }
    }, []);
    
    function enableDarkMode() {
        document.body.classList.add("darkMode");
        updateModeTextAndImage(true);
    }
    
    function disableDarkMode() {
        document.body.classList.remove("darkMode");
        updateModeTextAndImage(false);
    }
    
    function updateModeTextAndImage(isDarkMode) {
        const modeText = document.querySelector(".dark");
        const sunImg = document.querySelector(".sunImg");
    
        if (isDarkMode) {
            modeText.textContent = "Light Mode";
            sunImg.src = sun;
        } else {
            modeText.textContent = "Dark Mode";
            sunImg.src = moon;
        }
    
        localStorage.setItem('darkMode', isDarkMode ? 'dark' : 'light');
    }
    
    function handleModeToggle() {
        const isDarkModeActive = document.body.classList.contains('darkMode');
    
        if (isDarkModeActive) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }

    function handleChange(params) {
        const selectedLanguage = selectRef.current.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem("i18nextLng");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            if (selectRef.current) {
                selectRef.current.value = savedLanguage;
            }
        }
    }, [i18n]);
    

    
  return (
    <>
       <header>
        <div className="container">
            <nav>
                <ul>
                    <li><a href="#">{t("About me")}</a></li>
                    <li><a href="#">{t("Skills")}</a></li>
                    <li><a href="#">{t("Project")}</a></li>
                    <li><a href="#">{t("Contact")}</a></li>
                </ul>
                <select name="" id="select" onChange={handleChange} ref={selectRef}>
                    <option value="uzb">uzb</option>
                    <option value="eng">eng</option>
                    <option value="rus">rus</option>
                </select>
                <div className="dark-div" onClick={handleModeToggle}>
                <img className='sunImg' src={moon} alt="" width="20px"/>
                <span className='dark'>{t("Dark Mode")}</span>
            </div>
            </nav>
         
        </div>
        </header> 
    </>
  )
}

export default Header