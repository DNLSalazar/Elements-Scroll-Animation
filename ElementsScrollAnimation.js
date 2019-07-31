
var animable = document.getElementsByClassName("myAnimatable");

window.addEventListener("load", function () {
    window.addEventListener("scroll", animate);
});

function animate () {
    for(var i = 0; i < animable.length; i++) {
        if(animable[i].getBoundingClientRect().top < 600) {

            console.log(animable[i].style.getPropertyValue("border"));
            switch (animable[i].getAttribute("my-animation")) {
                //Fade Simple Animations
                case "fade left":
                    animable[i].style.setProperty("transform", "translate(-100px, 0px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                case "fade right":
                    animable[i].style.setProperty("transform", "translate(100px, 0px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                case "fade top":
                    animable[i].style.setProperty("transform", "translate(0px, -100px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                case "fade bottom":
                    animable[i].style.setProperty("transform", "translate(0px, 100px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                //Bounce Animations

                case "bounce left":
                    animable[i].style.setProperty("transform", "translate(-250px, 0px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                case "bounce right":
                    animable[i].style.setProperty("transform", "translate(250px, 0px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                case "bounce top":
                    animable[i].style.setProperty("transform", "translate(0px, -250px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                case "bounce bottom":
                    animable[i].style.setProperty("transform", "translate(0px, 250px)");
                    animable[i].style.setProperty("animation-name", "animations");
                break;

                //Rotate Animations

                case "rotate x":
                    animable[i].style.setProperty("transform", "rotateX(90deg)");
                    animable[i].style.setProperty("animation-name", "rotateAnimations");
                break;

                case "rotate y":
                    animable[i].style.setProperty("transform", "rotateY(90deg)");
                    animable[i].style.setProperty("animation-name", "rotateAnimations");
                break;

            }            
        }
    }
}
