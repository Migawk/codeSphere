import styles from "./header.module.sass";

import NavButton from "./components/NavButton.tsx";
import Modal from "./components/Modal.tsx";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [isSearch, setSearch] = useState<boolean>(false);
  const [isModal, setModal] = useState<boolean>(false);

  return (
     <header className={styles.header}>
       <div>
         <svg className={styles.logoImage} width="107" height="62" version="1.1" viewBox="0 0 107 62" xmlns="http://www.w3.org/2000/svg">
           <path id={styles.computer} d="m65 52s-0.38-5.8 5.5-5.8h62s5.7-0.61 5.7 6.1-0.16 43-0.16 43-0.65 5.5-6.6 5.5h-59s-6.7 0.33-6.7-5.8c0-6.1-0.3-43-0.3-43z" fill="#f9f9f9"/>
           <path id={styles.computer} d="m84 108h35l-3.6-3.6h-7.6v-4.3h-12v4.9h-7.2z" fill="#f9f9f9"/>
           <path id="path3" d="m64 56s-20 20-0.86 28c20 7.5 55-7.5 55-7.5s15-6.6 18-9.9c2.7-3.3 8.5-8.2 8.5-8.2s-0.076 8.9-16 20-41 16-41 16-27 2.7-36-7.1c-9.3-9.8 0-21 0-21s9.2-10 13-11c3.7-0.91 0.11 1.6 0.11 1.6z" fill="#3f40ea"/>
           <path id="path4" d="m140 59 4-2.7 4.7 4.7-0.92-5.9 5.4-2.9-5.2-0.92-1.6-5.2-2.7 4.1-5.5-1.1 3.7 4.3z" fill="#3f40ea"/>
         </svg>
       </div>
       <nav className={styles.nav}>
          <NavButton>Home</NavButton>
          <NavButton>Tjänster</NavButton>
          <div className={styles.aboutUs}>
            <NavButton>Om oss</NavButton>
            <div><button>Vårt&nbsp;team</button></div>
          </div>
          <NavButton>Karriärer</NavButton>
          <NavButton>Kontakt</NavButton>
       </nav>
       <div className={styles.actions}>
         {isSearch && <div className={styles.search}>
           <div className={styles.searchField}>
             <input type="text" placeholder="Search..."/>
           </div>
         </div>}
        <button onClick={() => setSearch(pr => !pr)}>
          { !isSearch ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          }
        </button>
        <button onClick={() => setModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        {
          isModal && createPortal(<Modal toClose={() => setModal(false)}/>, document.body)
        }
       </div>
     </header>
   )
 }
