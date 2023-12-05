import flipImg from "./Images/flipscreen.png"
import LawPawLogo from "./Images/LawPaw.png"

const FlipAlert = () => {
    return(
        <div className="flip-alert">
            <img className="logoLaw" src={LawPawLogo} alt="LawPaw Logo"></img>
            <div>
            <h3> For the best experience, <br /> please hold your device <br /> in the portait orientation.</h3>
            <img className="flipImg" src={flipImg} alt="Flipscreen icon"></img>
            </div>
        </div>
    )
}

export default FlipAlert;