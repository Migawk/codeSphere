import styles from "./carousel.module.sass";
import { useEffect, useRef } from "react";

export default function TextCarousel(
  {text, color, direction="right", textColor}
  : {
    text: string[],
    color: string,
    direction: "left" | "right",
    textColor: string
  }
) {

  const list = new Array(2).fill(text, 0, 2).flat(3);
  const carousel = useRef(null);

  useEffect(() => {
    // let num = 0;
    // if(carousel.current === null) return;
    // setInterval(() => {
    //   direction == "right" ? num++ : num--
    //   const carouselObj = carousel.current as unknown as HTMLDivElement;

    //   carouselObj.style.left = direction == "right" ? (num - list.length/2*326) + "px" : (num + list.length*16) + "px"
    //   if(direction == "right" && num - list.length/2*326 >= 0) num = 0;
    //   if(direction == "left" && -(num - list.length/2*326) >= list.length*326) num = 0;
    // }, 25);
  }, []);
  return (
    <div
      className={styles.wrap}
      style={{background: "#"+color, color: "#"+textColor}}
      >
      <div
        ref={carousel}
        className={[styles.carousel, styles[direction]].join(" ")}
      >
        {
          list.map((el, ind) => {
            return <span key={ind}>{el}</span>
          })
        }
      </div>
    </div>
  )
}
