import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

/// Parllax

// Début du code qui s'exécute au chargement
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".shop_button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      gsap.to(window, { duration: 2, scrollTo: "#shop" });
    });

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
        ease: "linear",
        onUpdate: (self) => {
          // `self` contient des informations sur le ScrollTrigger
          // ScrollTrigger.refresh();
          // console.log("Refresh");
          // console.log("Progression :", self.progress);
          // Vous pouvez aussi accéder à d'autres valeurs comme self.direction
        },
      },
    })
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
    )
    .to(
      ".thunder_storm",
      {
        marginTop: "-=40%",
        duration: 7,
      },
      0
    );
  // .add(function () {
  //   console.log("Refresh");
  // ScrollTrigger.refresh();
  // });

  ///Animations éclairs

  // // gsap.from(".thunder_lightning_1", {
  // //   scrollTrigger: {
  // //     trigger: ".thunder_lightning_1",
  // //     start: "top bottom",
  // //     end: "center top",
  // //     scrub: 1,
  // //     markers: true,
  // //   },
  // //   opacity: 0,
  // //   right: "100vw",
  // // });

  // // gsap.from(".thunder_lightning_2", {
  // //   scrollTrigger: {
  // //     trigger: ".thunder_lightning_2",
  // //     start: "top bottom",
  // //     end: "center top",
  // //     scrub: 1,
  // //     markers: true,
  // //   },
  // //   opacity: 0,
  // //   left: "100vw",
  // // });

  /// Scroll horizontal

  gsap.to(".family_page_slider_track", {
    scrollTrigger: {
      trigger: ".family_page_slider_mask",
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: true,
      markers: true,
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
        markers: true,
        id: "falling",
      },
    })

    // .from(
    //   ".falling_sabre",
    //   {
    //     opacity: 0,
    //   }

    // )
    // .to(
    //   ".falling_sabre",
    //   {
    //     top: "25%",
    //   }

    // )

    .fromTo(
      ".falling_sabre",
      {
        top: "-30%",
        ease: "none",
      },
      {
        top: "100%",
        ease: "none",
      }
    );
}); // Fin du code qui s'exécute au chargement
