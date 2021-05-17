let allnavs = document.querySelectorAll(".nav-div");
for (let i = 0; i < allnavs.length; i++) {
    allnavs[i].addEventListener("click", function (e) {
        if (e.target.classList.contains("active-class")) {
            if(e.target.classList)
            e.target.classList.remove("active-class")
            return;
        }
        if (document.querySelector(".active-class")) {
            document.querySelector(".active-class").classList.remove("active-class");
        }
        e.target.classList.add("active-class");
    })
}

let btn = document.querySelector(".drpdown");
btn.addEventListener("click", function (e) {
    if(document.querySelector(".dropdown-list")){
        document.querySelector(".dropdown-list").remove();
        return;
    }
    let div = document.createElement("div");
    div.classList.add("dropdown-list");
    div.innerHTML = `<a href="">Josh 1</a>
         <a href="">Josh 2</a>
         <a href="">Josh 3</a>
         <a href="">Josh 4</a>`;
    let hero = document.querySelector(".hero");
    hero.append(div);
})

function getById(id) {
    return document.getElementById(id)
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

window.onload = function () {
    function initCarousel() {
        const carousels = getByClass("carousel")
        carousels.length && Array.from(carousels).forEach(function (carousel) {
            const slides = carousel.querySelectorAll(".slide");
            const slideCount = Math.min(slides.length, 4);
            let currentPosition = 0;
            const prevButton = carousel.querySelector("#next-button");
            const nextButton = carousel.querySelector("#prev-button");

            console.log('slides', slides)
            function removeSlides() {
                Array.from(slides).forEach(slide => {
                    if (slide.parentElement) {
                        slide.parentElement.removeChild(slide);
                    }
                });
            }

            function renderSlides() {
                removeSlides();
                for(let index = 0; index <  slideCount; index++) {
                    const slide = slides[(index+currentPosition) % slides.length];
                    carousel.insertBefore(slide, nextButton);
                }
            }

            prevButton.onclick = function () {
                currentPosition = (currentPosition - 1 + slides.length) % slides.length;
                renderSlides();
            }
            nextButton.onclick = function () {
                currentPosition = (currentPosition + 1) % slides.length;
                renderSlides();
            }
            removeSlides();
            renderSlides();
        })
    }

    initCarousel();
}



