import {generateImage} from "../api/ImageGenerator.js";
import { Link } from "react-router-dom";
import "./css/MagneticButton.css";
export default function MagneticButton() {
  const handleClick = () => {
    generateImage('LOL', 'PEEPEE');
    // Add any additional logic you want to perform when the button is clicked
  };
  return (
    <>
      <Link to={"/apitest"}>
        <button className="button button--dione" onClick={handleClick}>
          <span>Try it out!</span>
        </button>
      </Link>
    </>
  );
}