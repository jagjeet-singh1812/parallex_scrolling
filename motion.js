// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger); for react

gsap.from("#m1",
{
 scrollTrigger:
 {
    scrub: true
},y:200,
})

gsap.from("#m2",
{
 scrollTrigger:
 {
    scrub: true
},y:50,
})

gsap.from("#t2",
{
 scrollTrigger:
 {
    scrub: true
},x:50,
})

gsap.from("#t1",
{
 scrollTrigger:
 {
    scrub: true
},x:50,
})

gsap.from("#plants",
{
 scrollTrigger:
 {
    scrub: true
},x:-50,
})

gsap.from("#man",
{
 scrollTrigger:
 {
    scrub: true
},x:-250,
})
gsap.from("#text",
{
 scrollTrigger:
 {
    scrub: true
},x:600,
})
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";})

//  function load()
//  {
//    window.addEventListener(function(){
//     loader.style.display="none";})
// }
// setTimeout(load,2000);
