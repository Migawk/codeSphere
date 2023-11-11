import styles from "./footer.module.sass";
import logo from "../../assets/logo.svg";
import NavButton from "../Header/components/NavButton.tsx";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopDesc}>
          <img src={logo} alt="logo"/>
          <p>
            Revolutionära digitala lösningar skräddarsydda för ditt specifika behov. Välj oss för enastående kompetens inom webbutveckling, appdesign, e-handel och digital marknadsföring.
          </p>
        </div>
        <div className={styles.nav}>
          <NavButton>FACEBOOK</NavButton>
          <NavButton>TWITTER</NavButton>
          <NavButton>LINKEDIN</NavButton>
          <NavButton>INSTAGRAM</NavButton>
        </div>
        <div className={styles.footerTopLet}><h1>Let's talk</h1></div>
      </div>
      <div className={styles.footerBottom}>
        <div><span>© 2023 | Alrights reserved by</span><br/><span>Code Sphere</span></div>
        <div className={styles.footerBottomList}>
          <NavButton>OM OSS</NavButton>
          <NavButton>KONTAKT</NavButton>
          <NavButton>KARRIÄRER</NavButton>
        </div>
      </div>
    </footer>
  )
}
