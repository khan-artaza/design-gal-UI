gsap.to(".first .marq .slide",{
    x:-500,
    duration:6,
    ease: "linear",
    repeat:-1,
})

let hGreen = document.getElementById("hGreen")
let hYell = document.getElementById("hYell")
let yellPamplet = document.getElementById("yellPamplet")
let yell = document.getElementById("yell")

hYell.addEventListener("click",()=>{
    yellPamplet.style.removeProperty("display")
    yell.style.removeProperty("display")
})

hGreen.addEventListener("click",()=>{
    yellPamplet.style.setProperty("display", "none")
    yell.style.setProperty("display", "none")
})


