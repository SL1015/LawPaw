import { Link } from "react-router-dom";
import "./CategoryPage.css"

const CategoryPageDE = () => {
  return (
    <>
      <section className="header">
        <h1>German LawPaw CategoryPage</h1>
      </section>
      <section className="main-section">
        <div className="cat-select-container">
          <Link to="/de/category/1"><button className=""><h2>Cat 1</h2></button></Link>
          <Link to="/de/category/2"><button className=""><h2>Cat 2</h2></button></Link>
          <Link to="/de/category/3"><button className=""><h2>Cat 3</h2></button></Link>
          <Link to="/de/category/4"><button className=""><h2>Cat 4</h2></button></Link>
          <Link to="/de/category/5"><button className=""><h2>Cat 5</h2></button></Link>
          <Link to="/de/category/6"><button className=""><h2>Cat 6</h2></button></Link>
          <Link to="/de/category/7"><button className=""><h2>Cat 7</h2></button></Link>
          <Link to="/de/category/8"><button className=""><h2>Cat 8</h2></button></Link>
        </div>
      </section>
      <div className="back-button"><Link to="/"><button>Back</button></Link></div>
    </>
  );
};

export default CategoryPageDE;
