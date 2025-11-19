import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// /// Parllax
// Parallax

// // Début du code qui s'exécute au chargement
// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .querySelector(".shop_button")
//     .addEventListener("click", function (e) {
//       e.preventDefault();
//       gsap.to(window, { duration: 1, scrollTo: "#shop" });
//     });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".thunder_parallax",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
      id: "Parallax",
      ease: "linear",
      invalidateOnRefresh: true,
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

ScrollTrigger.refresh();
window.addEventListener("load", () => ScrollTrigger.refresh());
window.addEventListener("resize", () => ScrollTrigger.refresh());
document
  .querySelectorAll("img")
  .forEach((img) =>
    img.addEventListener("load", () => ScrollTrigger.refresh())
  );

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
