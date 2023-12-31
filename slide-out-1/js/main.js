const card = document.getElementById("activator");
const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

let toggle = false;

tl.to(".activator", {
  background: "#805ad5",
  borderRadius: "5em 0 0 5em",
});
tl.to(
  "nav",
  {
    clipPath: "ellipse(100% 100% at 50% 50%)",
  },
  "-=.5"
);
tl.to(
  "nav img",
  {
    opacity: 1,
    transform: "translateX(0)",
    stagger: 0.05,
  },
  "-=.5"
);
tl.pause();

card.addEventListener("click", () => {
  toggle = !toggle;
  toggle ? tl.play() : tl.reverse();
});
