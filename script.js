// Using gsap-ScrollTrigger for parallax effect
// get ScrollTrigger from GreenSock.com
// link is gven below ->
// 'https://greensock.com/scrolltrigger/
// used the cdn plug-in instead of download it
// Here goes the code

gsap.to("#witch", {
  scrollTrigger: {
    scrub: 0.5,
  },
  x: 1500,
  y: 200,
});

gsap.to("#bats", {
  scrollTrigger: {
    scrub: 0.5,
  },
  x: 200,
  scale: 1.5,
});

gsap.from("#wolf", {
  scrollTrigger: {
    scrub: 0.5,
  },
  x: 400,
});

gsap.to("#wolf", {
  scrollTrigger: {
    scrub: 0.5,
  },
  y: 100,
});

gsap.from("#castle", {
  scrollTrigger: {
    scrub: 1,
  },
  x: -100,
  y: -100,
});

console.log("ScrollTrigger");
console.log("working");
// Copyright PROTIK
