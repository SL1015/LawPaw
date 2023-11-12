import { Link, useParams } from "react-router-dom";
import "./CategoryPage.css"

const CategoryPageFR = () => {
  
  const { canton } = useParams();



  return (
    <>
      <section className="header">
        <h1>French LawPaw CategoryPage</h1>
      </section>
      <section className="main-section">
        <div className="cat-select-container">
          <Link to={`/fr/${canton}/1`}><button className=""><h2>Cat 1</h2></button></Link>
          <Link to="/fr/:canton/2"><button className=""><h2>Cat 2</h2></button></Link>
          <Link to="/fr/:canton/3"><button className=""><h2>Cat 3</h2></button></Link>
          <Link to="/fr/:canton/4"><button className=""><h2>Cat 4</h2></button></Link>
          <Link to="/fr/:canton/5"><button className=""><h2>Cat 5</h2></button></Link>
          <Link to="/fr/:canton/6"><button className=""><h2>Cat 6</h2></button></Link>
          <Link to="/fr/:canton/7"><button className=""><h2>Cat 7</h2></button></Link>
          <Link to="/fr/:canton/8"><button className=""><h2>Cat 8</h2></button></Link>
        </div>
      </section>
      <div className="back-button"><Link to="/"><button>Back</button></Link></div>
    </>
  );
};

export default CategoryPageFR;
