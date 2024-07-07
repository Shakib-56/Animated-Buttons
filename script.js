const item = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });

item.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "white",
      x: 30,
      scale: 1.3,
      transfromOrigin: "left center",
    })
    .to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.5 }, 0);
  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

// const tl = gsap
//   .timeline({ paused: true })
//   .to(item.querySelector(".text"), {
//     color: "white",
//     x: 10,
//   })
//   .to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.5 }, 0);
// item.addEventListener("mouseenter", () => tl.play());
// item.addEventListener("mouseleave", () => tl.reverse());
// //here {paused:true} in the time line is calle configuration object
// const tl = gsap
//   .timeline({ paused: true })
//   .to(".text", { color: "white", x: 10 })
//   .to(".dot", { backgroundColor: "#F93", scale: 1.5 }, 0);
// item.addEventListener("mouseenter", () => tl.play());
// item.addEventListener("mouseleave", () => tl.reverse());
