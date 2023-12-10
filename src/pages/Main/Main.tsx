import styles from "./main.module.sass";
import office from "../../assets/office.jpg";
import arrowUp from "../../assets/arrowUp.svg";
import googleLogo from "../../assets/googleLogo.png";
import peopleOffice from "../../assets/peopleOffice.jpg";
import share from "../../assets/share.svg";
import TextCarousel from "../../component/TextCarousel/TextCarousel.tsx";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type IRef = null | any | { current: HTMLDivElement };

export default function Main() {
  const [title1, title2]: [IRef, IRef] = [useRef(null), useRef(null)];

  const [modal, setModal] = useState<boolean>(
    import.meta.env.MODE !== "development" ? true : false
  );
  const [showButtonBack, setShowButtonBack] = useState<boolean>(false);

  function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function buttonTryEv(e: { clientX: number; clientY: number }) {
    const button = document.getElementById("buttonTry")!;
    const buttonCursor = {
      x: e.clientX - button.getBoundingClientRect().left - 85,
      y: e.clientY - button.getBoundingClientRect().top - 85,
    };
    console.log(buttonCursor);
    if (Math.abs(buttonCursor.x) > 64 || Math.abs(buttonCursor.y) > 64) {
      button.animate(
        {
          transform: "translate(0,0)",
        },
        {
          duration: 5000,
          fill: "forwards",
        }
      );
    } else {
      button.animate(
        {
          transform: `translate(${buttonCursor.x}px, ${buttonCursor.y}px)`,
        },
        { duration: 2000, fill: "forwards" }
      );
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const wrapper = document.querySelector("#wrapper3");
      const rollUpImg = document.getElementById("rollUp");

      const [logDes, logTitle] = [
        document.getElementById("logosDes"),
        document.getElementById("logosTitle"),
      ];

      if (rollUpImg && wrapper) {
        const val =
          wrapper.getBoundingClientRect().top - window.innerHeight + 650;
        if (val < 0 && val > -600) {
          rollUpImg.style.transform = `translateY(${val}px)`;
        }
      }
      if (logDes && logTitle) {
        const val =
          logDes.getBoundingClientRect().top - window.innerHeight + 100;
        if (val < 0) {
          logDes.animate(
            {
              transform: "rotateX(0deg)",
            },
            { duration: 5000, fill: "forwards" }
          );
          logTitle.animate(
            {
              transform: "rotateX(0deg)",
            },
            { duration: 5000, fill: "forwards" }
          );
        }
      }
      if (window.scrollY > 100) return setShowButtonBack(true);
      setShowButtonBack(false);
    });
    if (title1.current === null || title2.current === null) return;
    const list: HTMLElement[] = Array.from(title1.current.children);
    const list2: HTMLElement[] = Array.from(title2.current.children);

    (async () => {
      for (const elem of list) {
        await sleep(100);
        elem.className = styles.letterEnabled;
      }
      await sleep(1000);
      for (const elem of list2) {
        await sleep(100);
        elem.className = styles.letterEnabled;
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.wrapper1}>
        {modal &&
          createPortal(
            <div className={styles.modal}>
              <button
                className={styles.modalClose}
                onClick={() => setModal(false)}
              >
                Close
              </button>
              <p>
                Hello, this website is copy of{" "}
                <a href="https://visionagency.se">visionagency.se</a>
              </p>
              <p>
                It's only layout, I'm not author. I changed only name and other
                stuff.
              </p>
              <p>This website doesn't use cookies.</p>
            </div>,
            document.body
          )}
        <div className={styles.digitalField}>
          <h3 className={styles.digital}>DIGITAL</h3>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              viewBox="0 0 576 512"
            >
              <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
        </div>
        <div className={styles.titleCenter}>
          <div className={styles.title}>
            <div ref={title1}>
              <div className={styles.letterDisabled}>C</div>
              <div className={styles.letterDisabled}>O</div>
              <div className={styles.letterDisabled}>D</div>
              <div className={styles.letterDisabled}>E</div>
            </div>
            <div ref={title2}>
              <div className={styles.letterDisabled}>S</div>
              <div className={styles.letterDisabled}>P</div>
              <div className={styles.letterDisabled}>H</div>
              <div className={styles.letterDisabled}>E</div>
              <div className={styles.letterDisabled}>R</div>
              <div className={styles.letterDisabled}>E</div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          Revolutionära digitala lösningar skräddarsydda för ditt specifika
          behov. Välj oss för enastående kompetens inom webbutveckling,
          appdesign, e-handel och digital marknadsföring.
        </div>
        <div className={styles.image}>
          <img src={office} className={styles.imageTitle} />
        </div>
      </section>
      <section className={styles.wrapper2}>
        <h5 className={styles.logosDes} id="logosDes">
          Samverkan för Innovativ Utveckling
        </h5>
        <h1 className={styles.logosTitle} id="logosTitle">
          Digital Triumf genom Kreativa Allianser.
        </h1>
        <table className={styles.logosTable} cellSpacing={0}>
          <tbody>
            <tr className={styles.logosRow}>
              <td>
                <img
                  className={styles.logosCompany}
                  src={googleLogo}
                  alt="google logo"
                />
              </td>
              <td>
                <img
                  className={styles.logosCompany}
                  src={googleLogo}
                  alt="google logo"
                />
              </td>
              <td>
                <img
                  className={styles.logosCompany}
                  src={googleLogo}
                  alt="google logo"
                />
              </td>
              <td>
                <img
                  className={styles.logosCompany}
                  src={googleLogo}
                  alt="google logo"
                />
              </td>
              <td>
                <img
                  className={styles.logosCompany}
                  src={googleLogo}
                  alt="google logo"
                />
              </td>
              <td>
                <img
                  className={styles.logosCompany}
                  src={googleLogo}
                  alt="google logo"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styles.wrapper3} id="wrapper3">
        <div className={styles.wrapper3Left}>
          <img src={peopleOffice} alt="Glad people in office" id="rollUp" />
        </div>
        <div className={styles.wrapper3Right}>
          <div className={styles.wrapper3Title}>
            <p>Vem vi är</p>
            <h1>EXPERTER INOM DIGITALA LÖSNINGAR FÖR FÖRETAGSOMVANDLING</h1>
          </div>
          <p>
            På Code Sphere använder vi avancerad teknik och kreativa lösningar
            för att förvandla dina visioner till imponerande webbplatser, appar
            och digitala marknadsföringsstrategier. Med vår kompetenta personal
            och toppmoderna verktyg strävar vi efter att leverera exceptionella
            resultat och mätbar framgång. Tveka inte att kontakta oss och lyft
            ditt företag till nästa nivå.
          </p>
          <div
            id="buttonTryDiv"
            onMouseMove={buttonTryEv}
            className={styles.buttonTryDiv}
          >
            <button className={styles.buttonTry} id="buttonTry">
              <div></div>
              <span>
                Utforska oss <img src={share} />
              </span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <TextCarousel
          text={[
            "UI UX",
            "webbutveckling",
            "HTML",
            "CSS",
            "JS",
            "TS",
            "Code",
            "Sphere",
            "Solution",
          ]}
          color="af0"
          textColor="000"
          direction="left"
        />
        <TextCarousel
          text={[
            "UI UX",
            "webbutveckling",
            "HTML",
            "CSS",
            "JS",
            "TS",
            "Code",
            "Sphere",
            "Solution",
          ]}
          color="252525"
          textColor="fff"
          direction="right"
        />
      </section>
      {showButtonBack &&
        createPortal(
          <button
            className={styles.backButton}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={arrowUp} />
          </button>,
          document.body
        )}
    </main>
  );
}
