gsap.registerPlugin(ScrollTrigger);

gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 1
});

gsap.from(".hero-content h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8
});

gsap.from(".btn", {
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from(".item", {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});
