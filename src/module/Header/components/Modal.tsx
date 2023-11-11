import styles from "../header.module.sass";
import NavButton from "./NavButton.tsx";
import { useState, useEffect } from "react";

export default function Modal({toClose}: {toClose: any}) {
  const [isClosing, setClosing] = useState<boolean>(false);
  const [isOpening, setOpening] = useState<boolean>(true);

  useEffect(() => {
    setOpening(false);
  }, []);
  function closing() {
    setClosing(true);
    setTimeout(() => {
      toClose()
    }, 500);
  }
  return (
    <div className={[
      styles.modal,
      isClosing ? styles.modalFade : "",
      isOpening ? styles.modalFadeOpen : ""
    ].join(" ")}>
      <div className={styles.modalLeft}>
        <div>
        </div>
        <div>
          <h2 style={{marginBottom: "20px"}}>Följ oss</h2>
          <div className={styles.modalList}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className={styles.modalList}>
          <a href="#">Om oss</a>
          <a href="#">Kontakt</a>
          <a href="#">Karriärer</a>
          <a href="#">Blog</a>
        </div>
      </div>
      <div className={styles.modalCenter}>
        <div className={styles.modalListBig}>
          <div>
            <div className={[styles.modalRightButton, styles.reserveButton].join(" ")}>
              <button onClick={() => closing()} className={styles.closeButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </button>
            </div>
          </div>
          <NavButton>Home</NavButton>
          <NavButton>Tjänster</NavButton>
          <NavButton>Om oss</NavButton>
          <NavButton>Karriärer</NavButton>
          <NavButton>Kontakt</NavButton>
          <div></div>
        </div>
      </div>
      <div className={styles.modalRight}>
        <div className={styles.modalRightButton}>
          <button onClick={() => closing()} className={styles.closeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        </div>
        <form action="/search/" className={styles.modalSearch}>
          <input name="q" placeholder="Search keywords"/>
          <div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
          </div>
        </form>
        <div className={styles.modalRightBottom}>
          <h1>Get in touch</h1>
          <a href="tel:46012345678">+46 0123-456 78</a>
          <a href="mailto:hej@codeSphere.se">hej@codeSphere.se</a>
          <p>street 1, 611 00, Nyköping</p>
        </div>
      </div>
    </div>
  )
}
