import './index.css'
import sun from '../../assets/sun-regular.svg'
import  moon from '../../assets/moon.svg'
import { useEffect } from 'react';

function Header() {
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
    

  return (
    <>
       <header>
        <div className="container">
            <nav>
                <ul>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <select name="" id="">
                    <option value="uzb">uzb</option>
                    <option value="eng">eng</option>
                    <option value="rus">rus</option>
                </select>
                <div className="dark-div" onClick={handleModeToggle}>
                <img className='sunImg' src={moon} alt="" width="20px"/>
                <span className='dark'>Dark Mode</span>
            </div>
            </nav>
         
        </div>
        </header> 
    </>
  )
}

export default Header