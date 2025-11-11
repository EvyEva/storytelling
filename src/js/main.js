import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".thunder_parallax",
      start: "top top",
      // le chiffre de end indiquera la durée du parallax, tout devra se caler dessus
      end: "3000px bottom",
      scrub: true, //le chiffre donne un effet plus lisse à l'animation
      pin: true,
      //   markers: true,
      ease: "linear", //je sais pas si cette ligne est utile
    },
  })
  // j'ai commencé par animer le dernier sceen
  // pour vérifié en le faisant que le bas de l'image arrive pile en bas de la section quand l'animation est finit,
  // puis vous pourrez animer les autres screen
  .to(
    ".thunder_parallax_1",
    {
      top: "-1700px",
    },
    0
  )
  .to(
    ".thunder_parallax_2",
    {
      top: "-3000px",
    },
    0
  )
  .to(
    ".thunder_parallax_3",
    {
      top: "-3300px",
    },
    0
  )
  .to(
    ".thunder_parallax_4",
    {
      top: "-3800px",
    },
    0
  )
  .to(
    ".thunder_parallax_5",
    {
      top: "-4000px",
    },
    0
  );

// gsap.from(".thunder_lightning_1", {
//   scrollTrigger: {
//     trigger: ".thunder_lightning_1",
//     start: "1000px center",
//     end: "1500px center",
//     scrub: 1,
//     markers: true,
//   },
//   opacity: 0,
//   right: "100vw",
//   top: "-100vw",
// });
