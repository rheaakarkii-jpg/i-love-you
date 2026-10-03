/* =========================================
   OPEN WEBSITE
========================================= */

function openWebsite() {

    const screen =
        document.getElementById("openingScreen");

    screen.classList.add("hide");

    document.body.style.overflow = "auto";

    createHearts(20);
}


/* =========================================
   SCROLL
========================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   PHOTO POPUP
========================================= */

function openPhoto(image) {

    const modal =
        document.getElementById("photoModal");

    const modalImage =
        document.getElementById("modalImage");

    modalImage.src = image;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closePhoto() {

    const modal =
        document.getElementById("photoModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================================
   ESC TO CLOSE PHOTO
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePhoto();

        }

    }
);


/* =========================================
   CLICK OUTSIDE PHOTO
========================================= */

document
    .getElementById("photoModal")
    .addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closePhoto();

            }

        }
    );


/* =========================================
   READ MEMORY
========================================= */

function toggleMemory(id) {

    const memory =
        document.getElementById(id);

    if (memory) {

        memory.classList.toggle("open");

        createHearts(5);

    }

}


/* =========================================
   SURPRISE
========================================= */

function openSurprise() {

    const surprise =
        document.getElementById("surpriseMessage");

    if (surprise) {

        surprise.classList.toggle("open");

        createHearts(15);

    }

}


/* =========================================
   LOVE LETTER
========================================= */

function toggleLetter() {

    const letter =
        document.getElementById("letterContent");

    const button =
        document.getElementById("letterButtonText");

    if (!letter || !button) {
        return;
    }

    letter.classList.toggle("open");


    if (letter.classList.contains("open")) {

        button.innerText =
            "close letter ♡";

        createHearts(10);

    }

    else {

        button.innerText =
            "open letter";

    }

}


/* =========================================
   HEART RAIN
========================================= */

function makeItRain() {

    const finalMessage =
        document.getElementById("finalMessage");

    if (finalMessage) {

        finalMessage.innerText =
            "Okay... one more. And another. And another. ♡";

    }

    createHearts(50);

}


/* =========================================
   CREATE HEARTS
========================================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "click-heart";


        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            (14 + Math.random() * 22) + "px";


        heart.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        heart.style.animationDelay =
            Math.random() * 0.5 + "s";


        /* Random horizontal movement */

        heart.style.setProperty(
            "--random",
            Math.random()
        );


        document.body.appendChild(heart);


        setTimeout(
            function () {

                heart.remove();

            },
            5000
        );

    }

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        observer.observe(element);

    }
);


/* =========================================
   HEART CSS
========================================= */

const style =
    document.createElement("style");


style.innerHTML = `

.click-heart {

    position: fixed;

    pointer-events: none;

    z-index: 30000;

    color: #db7695;

    animation:
        heartRise 4s ease forwards;

}


@keyframes heartRise {

    0% {

        transform:
            translateY(0)
            scale(.4)
            rotate(0deg);

        opacity: 0;

    }


    15% {

        opacity: 1;

    }


    100% {

        transform:
            translateY(-500px)
            translateX(
                calc(-100px + 200px * var(--random))
            )
            scale(1.3)
            rotate(25deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(style);


/* =========================================
   INITIAL STATE
========================================= */

document.body.style.overflow = "hidden";