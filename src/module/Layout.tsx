import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";

export default function Layout({children}: {children: React.ReactNode}) {
   return (
     <>
      <Header/>
      {children}
      <Footer/>
     </>
   )
 }
