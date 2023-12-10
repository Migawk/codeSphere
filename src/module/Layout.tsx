import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  function smoother(X: number, Y: number, element: HTMLElement | null, coeff: number) {
    if(!element) return;
    element.animate({
      left: X + "px",
      top: Y + "px",
    },
      { duration: 500 * coeff, fill: "forwards"}
    )
  }

  useEffect(() => {
    const pointer = document.getElementById("cursorPointer");
    const circle = document.getElementById("cursorCircle");

    document.addEventListener("mousemove", (e) => {
      const { clientX: X, clientY: Y } = e as unknown as {
        clientX: number;
        clientY: number;
      };
      smoother(X, Y, pointer, 16);
      smoother(X, Y, circle, 8);
    });
  }, []);
  return (
    <>
      <div id="cursorPointer"></div>
      <div id="cursorCircle"></div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
