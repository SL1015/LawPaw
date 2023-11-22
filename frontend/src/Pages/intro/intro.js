import { Link } from "react-router-dom";
import "./intro.css";
import LawPawLogo from "../../components/Images/LawPaw.png"

const Intro = () => {
  return (
    <>
      <section className="intro-section">
        <img src={LawPawLogo} alt="LawPaw Logo"></img>
        <h1>LawPaw</h1>
        <h3>
          Hi there! I'm LawPaw, <br />
          your legal buddy
        </h3>
        <p>
          You pose the questions, I bring the legal know-how, just like chatting
          with a friend. Together, Let's conquer the peaks of Swiss private law!
        </p>
        <Link to={"/homepage"}>
          <button className="start-button">Let’s Begin</button>
        </Link>
      </section>
    </>
  );
};

export default Intro;
