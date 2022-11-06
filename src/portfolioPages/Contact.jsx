import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact({ Color, Color1, Toggle }) {
  const { t } = useTranslation();

  return (
    <div className="Contact">
      <div
        className="Contactinfo"
        style={{
          backgroundColor: Color1 ? Color1 : "#00bcd4",
          background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
          transition: `0.4s`,
        }}
      >
        <div className="box1">
          <h1 style={{ color: Color ? Color : "#000", transition: "0.4s" }}>
            {t("Have you any Questions?")}
          </h1>
          <p>{t("I`am at your service")}</p>
        </div>

        <div className="item">
          <div>
            <i
              class="fa-solid fa-mobile-screen"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></i>
            <p>{t("I`m in touch")}</p>
            <p>+374 99 42 48 48</p>
          </div>
          <div>
            <i
              class="fa-solid fa-envelope"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></i>
            <p>{t("Email")}</p>
            <p>petrossiana@bk.ru</p>
          </div>
          <div>
            <i
              class="fa-solid fa-earth-americas"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></i>
            <p>{t("Website")}</p>
            <p>www.petrossians.site</p>
          </div>
          <div>
            <i
              class="fa-brands fa-telegram"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></i>
            <a href="https://t.me/petrossian888">
              <i
                class="fa-solid fa-link"
                style={{ color: Color ? Color : "#000", transition: "0.4s" }}
              ></i>
              Telegram
            </a>
          </div>
          <div>
            <i
              class="fa-brands fa-instagram"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></i>
            <a href="https://instagram.com/aram____888?r=nametag">
              <i
                class="fa-solid fa-link"
                style={{ color: Color ? Color : "#000", transition: "0.4s" }}
              ></i>
              Instagram
            </a>
          </div>
          <div>
            <i
              class="fa-brands fa-facebook"
              style={{ color: Color ? Color : "#000", transition: "0.4s" }}
            ></i>
            <a href="https://www.facebook.com/profile.php?id=100012784269659">
              <i
                class="fa-solid fa-link"
                style={{ color: Color ? Color : "#000", transition: "0.4s" }}
              ></i>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
