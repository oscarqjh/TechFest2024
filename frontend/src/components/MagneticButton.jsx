import { Link } from "react-router-dom";
import "./css/MagneticButton.css";
export default function MagneticButton() {
  return (
    <>
      <Link to={"/app"}>
        <button className="button button--dione">
          <span>Try it out!</span>
        </button>
      </Link>
    </>
  );
}
