import { useEffect, useLayoutEffect, useState } from "react";
import "./css/LandingPage.css";

export default function LandingPage() {
  const [initialised, setInitialised] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // main event driver
    if (!initialised) {
      setInitialised(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  // useLayoutEffect(() => {}, []);

  return (
    <>
      <main className={isLoading ? "loading" : null}>
        <div className="frame">
          <div className="frame__title">
            <h1 className="frame__title-main">Github</h1>
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
          <a className="frame__prev" href="">
            Devpost
          </a>
          <div className="cdawrap" id="cdawrap">
            <a className="cda-sponsor-link" href="" target="_blank">
              Frai: This project is submmited <br></br>to Techfest 2024
            </a>
          </div>
        </div>

        <section className="preview-wrap">
          <div className="preview">
            <div className="preview__img-wrap">
              <div className="preview__img">
                <div
                  className="preview__img-inner"
                  style={{ backgroundImage: "url(/img/1.jpg)" }}
                ></div>
              </div>
            </div>
            <div className="preview__title">
              <h2 className="preview__title-main">
                <span className="oh">
                  <span className="oh__inner">FrAI</span>
                </span>
                {/* <span className="oh">
                  <span className="oh__inner"></span>
                </span> */}
              </h2>
              <p className="preview__desc">
                FRAI: Elevating Your Culinary Experience, One Recipe at a Time.
              </p>
            </div>
          </div>
        </section>

        <section className="content-wrap">
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Andesite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">aphanitic</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By James Maurice Rojo</span>
              </div>
              <div className="content__text">
                Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate
                composition. In a general sense, it is the intermediate type
                between silica-poor basalt and silica-rich rhyolite.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                // style="background-image:url(img/1_1.jpg)"
              ></div>
              <div
                className="content__thumbs-item"
                // style="background-image:url(img/1_2.jpg)"
              ></div>
              <div
                className="content__thumbs-item"
                // style="background-image:url(img/1_3.jpg)"
              ></div>
              <div
                className="content__thumbs-item"
                // style="background-image:url(img/1_4.jpg)"
              ></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
