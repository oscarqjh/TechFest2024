import { useEffect, useLayoutEffect, useState } from "react";
import "./css/LandingPage.css";
import MagneticButton from "../components/MagneticButton";

export default function LandingPage() {
  const [initialised, setInitialised] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // main event driver
    if (!initialised) {
      setInitialised(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      <main className={isLoading ? "loading" : null}>
        <div className="frame">
          <div className="frame__title">
            <h1 className="frame__title-main"><a href="https://github.com/oscarqjh/TechFest2024">Github</a></h1>
            <a
              aria-label="Back to the article"
              className="frame__title-back"
              href="https://github.com/oscarqjh/TechFest2024"
              target="_blank"
            >
              <svg width="18px" height="18px" viewBox="0 0 24 24">
                <path
                  vectorEffect="non-scaling-stroke"
                  d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
                ></path>
              </svg>

              <span className="oh__inner">Back to the article</span>
            </a>
          </div>
          <a
            className="frame__prev"
            href="https://devpost.com/software/frai"
            target="_blank"
          >
            Devpost
          </a>
          <div className="cdawrap" id="cdawrap">
            <a className="cda-sponsor-link" href="" target="_blank">
              Team BluTech: This project is <br></br>submmited to Techfest 2024
            </a>
          </div>
        </div>

        <section className="preview-wrap">
          <div className="preview">
            <div className="preview__img-wrap">
              <div className="preview__img">
                <div
                  className="preview__img-inner"
                  style={{
                    backgroundImage: "url(/img/food1.jpg)",
                    filter: "brightness(70%)",
                  }}
                ></div>
              </div>
            </div>
            <div className="preview__title">
              <h2 className="preview__title-main">
                <span className="oh">
                  <span className="oh__inner">
                    <strong>FrAI</strong>(/fraɪ/)
                  </span>
                </span>
                {/* <span className="oh">
                  <span className="oh__inner"></span>
                </span> */}
              </h2>
              <p className="preview__desc">
                FRAI: Elevating Your Culinary Experience, One Recipe at a Time.
              </p>
              <MagneticButton />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
