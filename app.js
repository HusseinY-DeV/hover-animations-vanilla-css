let tl = gsap.timeline();

tl.to('.slider p', { duration: 2, opacity: 1 })
    .to('.slider', { duration: 1, y: "-100%" }, "+=2")


let svg = document.querySelectorAll("#design path");

for (let i = 0; i < svg.length; i++) {
    console.log(svg[i].getTotalLength());
}
