import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// /// Parllax
// Parallax
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
      id: "Parallax",
      ease: "linear", // Pas utile lorsqu'on utilise scrub
      invalidateOnRefresh: true, // Recalcule les valeurs start à chaque refresh
    },
  })
  .to(
    ".thunder_parallax_1",
    {
      marginTop: "-=10%",
      duration: 7,
      onComplete: () => ScrollTrigger.refresh(),
    },
    0
  )
  .to(
    ".thunder_parallax_2",
    {
      marginTop: "-=20%",
      duration: 7,
      onComplete: () => ScrollTrigger.refresh(),
    },
    0
  )
  .to(
    ".thunder_parallax_3",
    {
      marginTop: "-=30%",
      duration: 7,
      onComplete: () => ScrollTrigger.refresh(),
    },
    0
  )
  .to(
    ".thunder_parallax_4",
    {
      marginTop: "-=10%",
      duration: 7,
      onComplete: () => ScrollTrigger.refresh(),
    },
    0
  )
  .to(
    ".thunder_parallax_5",
    {
      marginTop: "-=20%",
      duration: 7,
      onComplete: () => ScrollTrigger.refresh(),
    },
    0
  )
  .to(
    ".thunder_storm",
    {
      marginTop: "-=40%",
      duration: 7,
      onComplete: () => ScrollTrigger.refresh(),
    },
    0
  );

// refresh une fois maintenant (au cas où les images sont déjà chargées) et au chargement/redimensionnement/chargement d'image
ScrollTrigger.refresh();
// recalculer ScrollTrigger quand la taille de la mise en page/des assets change
window.addEventListener("load", () => ScrollTrigger.refresh());
window.addEventListener("resize", () => ScrollTrigger.refresh());
document
  .querySelectorAll("img")
  .forEach((img) =>
    img.addEventListener("load", () => ScrollTrigger.refresh())
  );

// // Début du code qui s'exécute au chargement
// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .querySelector(".shop_button")
//     .addEventListener("click", function (e) {
//       e.preventDefault();
//       gsap.to(window, { duration: 1, scrollTo: "#shop" });
//     });

//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: ".thunder_parallax",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         // markers: true,
//         id: "Parallax",
//         ease: "linear",
//         onUpdate: (self) => {},
//       },
//     })
//     .to(
//       ".thunder_parallax_1",
//       {
//         marginTop: "-=10%",
//         duration: 7,
//       },
//       0
//     )
//     .to(
//       ".thunder_parallax_2",
//       {
//         marginTop: "-=20%",
//         duration: 7,
//       },
//       0
//     )
//     .to(
//       ".thunder_parallax_3",
//       {
//         marginTop: "-=30%",
//         duration: 7,
//       },
//       0
//     )
//     .to(
//       ".thunder_parallax_4",
//       {
//         marginTop: "-=10%",
//         duration: 7,
//       },
//       0
//     )
//     .to(
//       ".thunder_parallax_5",
//       {
//         marginTop: "-=20%",
//         duration: 7,
//       },
//       0
//     )
//     .to(
//       ".thunder_storm",
//       {
//         marginTop: "-=40%",
//         duration: 7,
//       },
//       0
//     );
//   // .add(function () {
//   //   console.log("Refresh");
//   // ScrollTrigger.refresh();
//   // });

//   ///Animations éclairs

//   // gsap.from(".thunder_lightning_1", {
//   //   scrollTrigger: {
//   //     trigger: ".thunder_lightning_1",
//   //     start: "center top",
//   //     end: "bottom top",
//   //     scrub: 1,
//   //     markers: true,
//   //     id: "droite",
//   //   },
//   //   right: "10vw",
//   // });

//   // gsap.from(".thunder_lightning_2", {
//   //   scrollTrigger: {
//   //     trigger: ".thunder_lightning_2",
//   //     start: "bottom top",
//   //     end: "bottom top",
//   //     scrub: 1,
//   //     markers: true,
//   //     id: "gauche",
//   //   },
//   //   left: "10vw",
//   // });

/// Scroll horizontal

gsap.to(".family_page_slider_track", {
  scrollTrigger: {
    trigger: ".family_page_slider_mask",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: true,
    // markers: true,
    id: "scroll",
  },
  x: "-100%",
  ease: "sine.inOut",
});

/// Sabre tombe

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".falling_page",
      start: "top center",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
      id: "falling",
    },
  })

  .fromTo(
    ".falling_sabre",
    {
      top: "-50%",
      ease: "none",
    },
    {
      top: "100%",
      ease: "none",
    }
  ); // Fin du code qui s'exécute au chargement
