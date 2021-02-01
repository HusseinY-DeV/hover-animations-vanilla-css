let tl = gsap.timeline();

tl.to('.slider p',{duration:2,opacity:1})
.to('.slider',{duration:1,y:"-100%"},"+=2")