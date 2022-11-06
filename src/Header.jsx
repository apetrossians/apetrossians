import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./portfolioCss/Home.css";
import Home from "./portfolioPages/Home";
import About from "./portfolioPages/About";
import aos from "aos";
import Typed from "react-typed";
import Error from "./Error/Error";
import { memo } from "react";
import Contact from "./portfolioPages/Contact";
import { useTranslation } from "react-i18next";
import "flag-icon-css/css/flag-icons.css";
import i18next from "i18next";
import Loading from "./Loading/Loading";

const colorTheme = [
  {
    color: "#AA9A39",
  },
  {
    color: "#ECAB1E",
  },
  {
    color: "#FF5A09",
  },
  {
    color: "#D0F61C",
  },
  {
    color: "#31AB6F",
  },
  {
    color: "#9667D8",
  },
];

const colorBackground = [
  {
    color: "#0F2B56",
    color1: "#0F2B56",
  },
  {
    color: "#263442",
    color1: "#263442",
  },
  {
    color: "#419370",
    color1: "#419370",
  },
  {
    color: "#BEB99C",
    color1: "#BEB99C",
  },
  {
    color: "#543A64",
    color1: "#543A64",
  },
  {
    color: "#979CBC",
    color1: "#979CBC",
  },
];

export default memo(function Header() {
  const [active, setActive] = React.useState(false);
  const [active1, setActive1] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [Toggle, setToggle] = React.useState(false);
  const [Theme, setTheme] = React.useState(false);
  const [Color, setColor] = React.useState(false);
  const [Color1, setColor1] = React.useState(false);
  const [Background, setBackground] = React.useState(false);
  const [Language, setLanguage] = React.useState(false);
  const [Show, setShow] = React.useState(false);
  const [Bar, setBar] = React.useState(false);

  useEffect(() => {
    aos.init();
  }, []);

  const { t } = useTranslation();

  const names = t("names", { returnObjects: true });
  return (
    <div
      className="background"
      style={{
        backgroundColor: Toggle ? "#121212" : Background,
        background: Background ? Background : "",
      }}
    >
      <BrowserRouter>
        <div className="headBox">
          <div
            className={Bar ? "overlay" : "sidebar"}
            onClick={() => setBar(!Bar)}
            style={{
              backgroundColor: Color1 ? Color1 : "#00bcd4",
              background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
              transition: "0.4s",
              height: Bar ? "100%" : "60px",
            }}
          >
            {Bar ? (
              <>
                <ion-icon
                  name="close-outline"
                  style={{
                    color: Color ? Color : "#fff",
                    transition: "0.4s",
                    cursor: "pointer",
                  }}
                  onClick={() => setBar(!Bar)}
                ></ion-icon>
                <div class="overlay-content">
                  {names.map((item, i) => {
                    return (
                      <Link
                        to={`/${item.name1}`}
                        key={i}
                        style={{
                          color:
                            (active === i && `${Color}`) || Show === i
                              ? Color
                              : "#FFF",
                        }}
                        onMouseEnter={(e) => setShow(e.target.style.color && i)}
                        onMouseLeave={(e) =>
                          setShow(e.target.style.color && i && false)
                        }
                        className={active === i ? "active" : ""}
                        onClick={() => {
                          setActive(i);
                          setBar(false);
                        }}
                        title={`${item.name}`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <i
                class="fa-solid fa-bars"
                style={{
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              ></i>
            )}
          </div>
          <div
            className="header"
            style={{
              backgroundColor: Color1 ? Color1 : "#00bcd4",
              background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
              transition: "0.4s",
            }}
          >
            {names.map((item, i) => {
              return (
                <Link
                  to={`/${item.name1}`}
                  key={i}
                  style={{
                    color:
                      (active === i && `${Color}`) || Show === i
                        ? Color
                        : "#FFF",
                  }}
                  onMouseEnter={(e) => setShow(e.target.style.color && i)}
                  onMouseLeave={(e) =>
                    setShow(e.target.style.color && i && false)
                  }
                  className={active === i ? "active" : ""}
                  onClick={() => setActive(i)}
                  title={`${item.name}`}
                >
                  <ion-icon name={`${item.icon}`}></ion-icon>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div
            className="themeColor"
            style={{ marginTop: Theme ? "140px" : "0px" }}
          >
            {Theme ? (
              <div className="colorDiv">
                <div className="Color" data-aos="fade-down">
                  <p
                    style={{
                      color: Toggle
                        ? "#fff"
                        : "#000" || Background
                        ? "#fff"
                        : "#000",
                    }}
                  >
                    {t("Themes Colors")}
                  </p>
                  <div
                    className="colorBox"
                    style={{
                      backgroundColor: Color1 ? Color1 : "#00bcd4",
                      background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                      transition: "0.4s",
                    }}
                  >
                    {colorTheme.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={active1 === i ? "active1" : ""}
                          onClick={(event) => {
                            setColor(
                              event.target.style.backgroundColor || true
                            );
                            setActive1(i);
                          }}
                          style={{
                            backgroundColor: `${item.color}`,
                            cursor: "pointer",
                          }}
                        >
                          {active1 === i ? (
                            <i class="fa-sharp fa-solid fa-circle-check"></i>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="Color" data-aos="fade-down">
                  <p
                    style={{
                      color: Toggle
                        ? "#fff"
                        : "#000" || Background
                        ? "#fff"
                        : "#000",
                    }}
                  >
                    {t("Box Colors")}
                  </p>
                  <div
                    className="colorBox"
                    style={{
                      backgroundColor: Color1 ? Color1 : "#00bcd4",
                      background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                      transition: "0.4s",
                    }}
                  >
                    {colorBackground.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={active2 === i ? "active2" : ""}
                          onClick={(event) => {
                            setColor1(
                              event.target.style.backgroundColor || true
                            );
                            setBackground(event.target.style.color || true);
                            setActive2(i);
                          }}
                          style={{
                            backgroundColor: `${item.color}`,
                            color: `${item.color1}`,
                            cursor: "pointer",
                          }}
                        >
                          {active2 === i ? (
                            <i class="fa-sharp fa-solid fa-circle-check"></i>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="toggles" data-aos="fade-down">
              <button
                onClick={() => setTheme(!Theme)}
                className="colorTheme"
                style={{
                  backgroundColor: Color1 ? Color1 : "#00bcd4",
                  background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                <i class="fa-solid fa-gear"></i>
              </button>
              <button
                onClick={() => {
                  setToggle(!Toggle);
                }}
                className={Toggle ? "dark" : "light"}
                style={{
                  backgroundColor: Color1 ? Color1 : "#00bcd4",
                  background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                {Toggle ? (
                  <i class="fa-solid fa-sun"></i>
                ) : (
                  <i class="fa-solid fa-moon"></i>
                )}
              </button>
              <button
                className="language"
                onClick={() => setLanguage(!Language)}
                style={{
                  backgroundColor: Color1 ? Color1 : "#00bcd4",
                  background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
                  color: Color ? Color : "#000",
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              >
                {Language ? (
                  <i
                    class="fa-solid fa-language"
                    onClick={() => i18next.changeLanguage("ru")}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-language"
                    onClick={() => i18next.changeLanguage("en")}
                  ></i>
                )}
              </button>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                Color={Color}
                Color1={Color1}
                Toggle={Toggle}
                Typed={Typed}
              />
            }
          />
          <Route
            path="/Home"
            element={
              <Home
                Color={Color}
                Color1={Color1}
                Toggle={Toggle}
                Typed={Typed}
              />
            }
          />
          <Route
            path="/About"
            element={<About Color={Color} Color1={Color1} Toggle={Toggle} />}
          />
          <Route
            path="/Contact"
            element={<Contact Color={Color} Color1={Color1} Toggle={Toggle} />}
          />
          <Route path="/*" element={<Error Color={Color} />} />
          <Route
            path="#"
            element={<Loading Color={Color} Color1={Color1} Toggle={Toggle} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
});
