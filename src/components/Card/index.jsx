import Header from '../Header'
import './index.css'
import img from '../../assets/Boy.svg'
import hand from '../../assets/hand.svg'
import { useTranslation } from "react-i18next";

function Card() {
    const {t, i18n} = useTranslation();

  return (
    <>
        <div className="card">
            <Header></Header>
            <div className="container">
                <div className="info">
                    <div className="text">
                        <h1>{t("Greeting")}</h1>
                        <p>{t("Info")}</p>
                        <div className="buttons">
                            <button className='white'>{t("Whitebtn")}</button>
                            <button className='black'>{t("Blackbtn")}</button>
                        </div>
                    </div>
                    <div className="img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card