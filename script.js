const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

//............TweenLite.to(object, time, {animate})
const tl = gsap.timeline({ defaults: {ease: "power1.out"} });

tl.to(".text", 1, {y: "0", stagger: 0.2})
.to(".hide", 0, {y: '-100%', delay: 1})
.fromTo(".slider", 1.5, {y: '200%'}, {y: '-200%'}, '-=0.75');

tl.fromTo("header h1", 1.5, {x: '-200%'}, {x: 0}, '-=1')
.to(".after", 1.5, {bottom: '-170%', height: '270px'})
.fromTo(".after", 0.7, {borderRadius: '0px'}, {borderRadius: '20px'}, "-=0.3")
.fromTo(".after-text", 0.8, {right: '-120%'}, {right: '0px'}, '-=1')
