gsap.registerPlugin(ScrollTrigger);
const intro = gsap.timeline();

const introPaths = ".intro path";
const istanbulPath = "#TR-34";
const introPathsWithoutIst = ".intro path:not(#TR-34)";
const introText = ".intro-text";
const introTextChars = ".intro-text span";
const title = ".title span";

const introSVG = document.querySelector(".intro svg");
const cityContent = document.querySelector(".content");
const images = document.querySelectorAll("img");
const loading = document.querySelector(".loading");
const scroll = document.querySelector(".scroll");

intro.
to(
title,
{
  duration: 2,
  x: 100,
  stagger: 0.3,
  opacity: 0 },

"intro").

to(scroll, { y: 50, opacity: 0, duration: 3 }, "intro").
from(
introSVG,
{
  x: -100,
  opacity: 0,
  duration: 2 },

"intro+=.2").

to(
introPaths,
{
  strokeDashoffset: "0",
  stagger: 0.04,
  fill: "rgba(255,255,255,.02)",
  duration: 3 },

"intro+=.5").

to(
istanbulPath,
{
  duration: 3,
  stroke: "red",
  fill: "red" },

"ist").

to(
introTextChars,
{
  y: 0,
  opacity: 1,
  stagger: 0.3,
  duration: 2 },

"ist-=.15").

to(
introPathsWithoutIst,
{
  opacity: 0.4,
  duration: 3 },

"ist-=.15").

to(
cityContent,
{
  top: "12vh",
  duration: 6,
  scale: 1 },

"content").

to(
introText,
{
  duration: 6,
  top: 0,
  height: "12vh",
  fontSize: "4vh",
  color: "#fff",
  y: "50%" },

"content");


ScrollTrigger.create({
  animation: intro,
  scrub: 1.2,
  trigger: ".intro",
  start: "top",
  end: "140%",
  pin: true,
  pinSpacing: false,
  onLeave: () => cityContent.style.overflow = "auto",
  onEnterBack: () => cityContent.style.overflow = "hidden" });


const observer = new IntersectionObserver(
entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.filter = "grayscale(0)";
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.filter = "grayscale(1)";
    }
  });
},
{
  threshold: 0.15 });



images.forEach((el, i) => {
  observer.observe(el);
});

imagesLoaded(images, () => {
  document.body.style.overflowY = "auto";
  loading.remove();
});