import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".thunder_parallax",
      start: "top top",
      // le chiffre de end indiquera la durée du parallax, tout devra se caler dessus
      end: "bottom bottom",
      scrub: true, //le chiffre donne un effet plus lisse à l'animation
      //   pin: true,
      markers: true,
      ease: "linear", //je sais pas si cette ligne est utile
    },
  })
  //   // j'ai commencé par animer le dernier sceen
  //   // pour vérifié en le faisant que le bas de l'image arrive pile en bas de la section quand l'animation est finit,
  //   // puis vous pourrez animer les autres screen
  .to(
    ".thunder_parallax_1",
    {
      marginTop: "-=10%",
      duration: 7,
    },
    0
  )
  .to(
    ".thunder_parallax_2",
    {
      marginTop: "-=20%",
      duration: 7,
    },
    0
  )
  .to(
    ".thunder_parallax_3",
    {
      marginTop: "-=30%",
      duration: 7,
    },
    0
  )
  .to(
    ".thunder_parallax_4",
    {
      marginTop: "-=10%",
      duration: 7,
    },
    0
  )
  .to(
    ".thunder_parallax_5",
    {
      marginTop: "-=20%",
      duration: 7,
    },
    0
  );

gsap.from(".thunder_lightning_1", {
  scrollTrigger: {
    trigger: ".thunder_lightning_1",
    start: "100px center",
    end: "150px center",
    scrub: 1,
    markers: true,
  },
  opacity: 0,
  right: "100vw",
  top: "-100vw",
});

gsap.from(".thunder_lightning_2", {
  scrollTrigger: {
    trigger: ".thunder_lightning_2",
    start: "200px center",
    end: "250px center",
    scrub: 1,
    markers: true,
  },
  opacity: 0,
  left: "100vw",
  top: "-100vw",
});

gsap.to(".family_page_slider-mask", {
  scrollTrigger: {
    trigger: ".family_page_slider-track",
    // start c'est le moment ou l'animation commence dans le site,
    // le premier top c'est par rapport à l'élément concerné,
    // le deuxieme c'est par rapport à la page
    start: "top top",
    // l'emplacement de end change la vitesse du scroll horizontal,
    // plus le chiffre à % est grand, plus il sera lent
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: true,
  },
  // x définit jusqu'ou la section va a droite, on peut le calculer (mais j'ai pas compris comment) ou faire à taton, bonne chance !
  x: "-1000%",
  ease: "sine.inOut",
});
