import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import image from "../DownloadPdfFile/IMG_E2795.JPG";

function Home({ Color, Color1, Toggle }) {
  const [hover1, setHover1] = React.useState(false);

  const { t } = useTranslation();
  return (
    <div className="Home">
      <div
        className="contaniner"
        style={{
          backgroundColor: Color1 ? Color1 : "#00bcd4",
          background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
          transition: `0.4s`,
        }}
      >
        <div className="box1">
          <div className="div1">
            <h1
              style={{
                display: "flex",
                color: "#fff",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {t("Hello, my name is")}
              <p
                className="p1"
                style={{
                  color: Color ? Color : "#000",
                }}
              >
                Aram
              </p>
            </h1>
          </div>
          <div className="div2">
            <h1
              style={{
                display: "flex",
                color: "#fff",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "4px",
              }}
            >
              {t("I`am Frontend Developer")}
            </h1>
          </div>
          <div className="pinfo">
            <div className="info">
              <p>{t("I`am a Web Developer for over 1")}</p>
              <p>{t("year, My expertise is to create Website Design")}</p>
            </div>
          </div>
          <div className="aboutmore">
            <Link
              to="/About"
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              style={{
                backgroundColor: Color ? Color : "#000",
                transition: "0.4s",
                color: hover1 ? "#000" : "#fff",
                background: hover1 ? "#fff" : Color,
              }}
            >
              {t("More About Me")}
            </Link>
          </div>
        </div>
        <div className="box2">
          <div
            className="div1"
            style={{
              border: `8px solid ${Color ? Color : "#000"} `,
              transition: `0.4s`,
            }}
          >
            <img src={image} alt="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
