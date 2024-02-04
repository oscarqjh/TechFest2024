import { gsap } from "gsap";
export default function LandingPage() {
  return (
    <>
      {/* <svg
        className="circles"
        width="100%"
        height="100%"
        viewBox="0 0 1400 1400"
      >
        <def>
          <path
            id="circle-1"
            d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
          />
          <path
            id="circle-2"
            d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
          />
          <path
            id="circle-3"
            d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
          />
          <path
            id="circle-4"
            d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
          />
        </def>
        <text className="circles__text circles__text--1">
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-1"
            aria-label=""
            textLength="2830"
          >
            Artificial Intelligence Generated Content&nbsp;
          </textPath>
        </text>
        <text className="circles__text circles__text--2">
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-2"
            aria-label=""
            textLength="2001"
          >
            Generative Artificial Intelligence&nbsp;
          </textPath>
        </text>
        <text className="circles__text circles__text--3">
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-3"
            aria-label=""
            textLength="1341"
          >
            Techfest 2024 - &nbsp;
          </textPath>
        </text>
        <text className="circles__text circles__text--4">
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-4"
            aria-label=""
            textLength="836"
          >
            BluTech - BluTech&nbsp;
          </textPath>
        </text>
      </svg> */}
      <div className="frame">
        <h1 className="frame__title">BluTech</h1>
        <nav className="frame__links">
          <a href="">Devpost</a>
          <a href="">GitHub</a>
        </nav>
      </div>
      <div className="content">
        <p>
          We are a team of developers who are passionate about Generative A.I.
          model and its applications. We are excited to present our project
          BluTech, a Generative A.I. model that can generate content for you.
        </p>
        <p>
          <strong>Try it out!</strong>
        </p>
      </div>
      <button className="enter">
        <div className="enter__bg"></div>
        <span className="enter__text">Enter</span>
      </button>
    </>
  );
}
