

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo("#baloon-element", { x: 300, y: 300, rotation: -90 }, { x: 0, y: 0, duration: 4, rotation: -0, ease: "back.out(3)" },);


gsap.from(".start-text", { duration: 1, opacity: 0, delay: 1 })

gsap.to("#promoking-logo", {
    scrollTrigger: {
        trigger: "#title-container",
        start: "top top",
        scrub: 1,
    },
    duration: 2, y: "-100%", ease: "bounce"
})




// gsap.to("#about-image-element", {
//     scrollTrigger: {
//         trigger: "#about-container",
//         pin: true,   // pin the trigger element while active
//         start: "top top", // when the top of the trigger hits the top of the viewport
//         // end after scrolling 500px beyond the start
//         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         //markers: true,
//     },
//     x: "100%"
// })

gsap.to("#about-text-element", {


    scrollTrigger: {
        trigger: "#about-container",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //markers: true,
    },
    x: "100%"

})






gsap.to("#bear-logo", {
    scrollTrigger: {
        trigger: "#personalization-container",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        // end after scrolling 500px beyond the start
        scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //markers: true,
    },
    rotation: "180"
})



// gsap.to("#bear-logo", {
//     scrollTrigger: {
//         trigger: "#personalization-container",
//         pin: true,   // pin the trigger element while active
//         start: "top top", // when the top of the trigger hits the top of the viewport
//         // end after scrolling 500px beyond the start
//         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         //markers: true,
//     },
//     rotation: "360"
// })








//animations for offer

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("leftAnim")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("rightAnim")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}


gsap.utils.toArray(".fromUp").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
        trigger: elem,
        onEnter: function () { animateFrom(elem) },
        onEnterBack: function () { animateFrom(elem, -1) },
        onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
});



