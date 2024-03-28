import photoGrid from "../images/photoGrid.png"
import "../styles/Hero.css"

export default function Hero() {
    return (
        <section id="hero-section">
            <img src={photoGrid} alt="Not found" id="photo-grid"/>
            <div className="hero-content">
                <div id="online-exp">Online Experiences</div>
                <div id="online-exp-des">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</div>
            </div>
        </section>
    )
}