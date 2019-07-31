
var animable = document.getElementsByClassName("myAnimatable");

window.addEventListener("load", function () {
    var items = animable.length;
    window.addEventListener("scroll", animateScroll);
});

function animate (data) {
    if(data.type){
        data = this;
        let i = parseInt(data.style.getPropertyValue("animation-iteration-count"));
        i++;
        data.style.setProperty("animation-iteration-count", `${i}`);
        console.log(data.style.getPropertyValue("animation-iteration-count"));
    } else {

        switch (data.getAttribute("my-animation")) {
            //Fade Simple Animations
    
            case "fade left":
                data.style.setProperty("--var1", "-100px");
                data.style.setProperty("--var2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "fade right":
                data.style.setProperty("--var1", "100px");
                data.style.setProperty("--var2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "fade top":
                data.style.setProperty("--var1", "0px");
                data.style.setProperty("--var2", "-100px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "fade bottom":
                data.style.setProperty("--var1", "0px");
                data.style.setProperty("--var2", "100px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            //Bounce Animations
    
            case "bounce left":
                data.style.setProperty("--var1", "-250px");
                data.style.setProperty("--var2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "bounce right":
                data.style.setProperty("--var1", "250px");
                data.style.setProperty("--var2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "bounce top":
                data.style.setProperty("--var1", "0px");
                data.style.setProperty("--var2", "-250px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "bounce bottom":
                data.style.setProperty("--var1", "0px");
                data.style.setProperty("--var2", "250px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            //Rotate Animations
    
            case "rotate x":
                data.style.setProperty("--var1", "rotateX(90deg)");
                data.style.setProperty("animation-name", "rotateAnimations");
            break;
    
            case "rotate y":
                data.style.setProperty("--var1", "rotateY(90deg)");
                data.style.setProperty("animation-name", "rotateAnimations");
            break;
    
            //ClipShake Animations
    
            case "clipShake center x":
                data.style.setProperty("clip-path", "inset(40% 40% 40% 40%)");
                data.style.setProperty("animation-name", "clipPathAnimationsX");
            break;
    
            case "clipShake center y":
                data.style.setProperty("clip-path", "inset(40% 40% 40% 40%)");
                data.style.setProperty("animation-name", "clipPathAnimationsY");
            break;
    
        }
        data.style.setProperty("animation-iteration-count", "1");
        data.style.setProperty("animation-delay", "1s");
    }

    // console.log(data.style.getPropertyValue("animation-name"));
}

function animateScroll (e) {
    for(var i = 0; i < animable.length; i++) {
        if(animable[i].getBoundingClientRect().top < 600) {
            animable[i].addEventListener("click", animate);
            animate(animable[i]);
        }
    }
}
