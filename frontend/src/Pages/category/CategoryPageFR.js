// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CategoryPage.css";
import Cat1 from "../../components/Images/Card-0.png";
import Cat2 from "../../components/Images/Card-1.png";
import Cat3 from "../../components/Images/Card-2.png";
import Cat4 from "../../components/Images/Card-3.png";
import Cat5 from "../../components/Images/Card-4.png";
import Cat6 from "../../components/Images/Card-5.png";

const CategoryPageEN = () => {
  const { language, canton } = useParams();
  console.log("Language:", language);
  console.log("Canton:", canton);
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState("1");

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleSkipClick = () => {
      // navigate(`/en/${canton}/0`)
  }

  const handleNavigateClick = () => {
    navigate(`/en/${canton}/${selectedCat}`);
  };

  const handleBackClick = () => {
    navigate("/homepage");
  };
  


  return (
    <>
      {/* <section className="header">
        <h1>English LawPaw CategoryPage</h1>
      </section>
      <section className="main-section">
        <div className="cat-select-container">
          <Link to="/en/category/1"><button className=""><h2>Cat 1</h2></button></Link>
          <Link to="/en/category/2"><button className=""><h2>Cat 2</h2></button></Link>
          <Link to="/en/category/3"><button className=""><h2>Cat 3</h2></button></Link>
          <Link to="/en/category/4"><button className=""><h2>Cat 4</h2></button></Link>
          <Link to="/en/category/5"><button className=""><h2>Cat 5</h2></button></Link>
          <Link to="/en/category/6"><button className=""><h2>Cat 6</h2></button></Link>
          <Link to="/en/category/7"><button className=""><h2>Cat 7</h2></button></Link>
          <Link to="/en/category/8"><button className=""><h2>Cat 8</h2></button></Link>
        </div>
      </section>
      <div className="back-button"><Link to="/"><button>Back</button></Link></div>
     */}

      <section className="main-nav">
        <div className="progress-title">
          <h4>Step 3: Legal Path</h4>
          <p onClick={handleSkipClick()}>Skip</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-three"></div>
        </div>
        <br></br>
      </section>
      <section className="main-section">
        <div className="options-container">
          <div className="title-container">
            <h1>
              Choose Your <br />
              Legal Path
            </h1>
            <p>
              Choose your law category and open the door to personalized
              guidance, made just for you.
            </p>
          </div>
          <div className="cat-select-container">
            <button
              className={`${selectedCat === "1" ? "active" : ""}`}
              onClick={() => handleCatClick("1")}
            >
              <img src={Cat1} />
            </button>
            <button
              className={`${selectedCat === "2" ? "active" : ""}`}
              onClick={() => handleCatClick("2")}
            >
            <img src={Cat2} />
            </button>
            <button
              className={`${selectedCat === "3" ? "active" : ""}`}
              onClick={() => handleCatClick("3")}
            >
            <img src={Cat2} />
            </button>
            <button
              className={`${selectedCat === "4" ? "active" : ""}`}
              onClick={() => handleCatClick("4")}
            >
            <img src={Cat3} />
            </button>
            <button
              className={`${selectedCat === "5" ? "active" : ""}`}
              onClick={() => handleCatClick("5")}
            >
            <img src={Cat4} />
            </button>
            <button
              className={`${selectedCat === "6" ? "active" : ""}`}
              onClick={() => handleCatClick("6")}
            >
            <img src={Cat5} />
            </button>
          </div>
        </div>
        <button className="idk-button" onClick={() => handleSkipClick()} >I don’t know</button>
        <div className="nav-bar-cat">
          <button className="back-button" onClick={() => handleBackClick()} >
            Back
          </button>
          <button
            className="continue-button"
            onClick={() => handleNavigateClick(selectedCat)}
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
};

export default CategoryPageEN;
