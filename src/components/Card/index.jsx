import Header from '../Header'
import './index.css'
import img from '../../assets/Boy.svg'
import hand from '../../assets/hand.svg'

function Card() {
  return (
    <>
        <div className="card">
            <Header></Header>
            <div className="info">
                <div className="container">
                    <div className="text">
                        <h1>Hi <img src={hand} alt="" />,<br /> I’m Charles,<br /> Front-end Developer</h1>
                        <p>I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</p>
                        <div className="buttons">
                            <button>HIRE ME</button>
                            <button>SEE MY PROJECTS</button>
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