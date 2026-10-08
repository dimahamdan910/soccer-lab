/* =========================
   SCROLL PROGRESS
========================= */

const progressFill = document.querySelector(".progress-fill");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressFill.style.width =
        scrollPercentage + "%";

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.2
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   PARALLAX EFFECT
========================= */

const heroBackground =
    document.querySelector(".hero-background");

const heroBall =
    document.querySelector(".hero-ball");

const ballOne =
    document.querySelector(".ball-one");

const player =
    document.querySelector(".player-one");

const stadiumBack =
    document.querySelector(".layer-back");

const stadiumMiddle =
    document.querySelector(".layer-middle");

const phone =
    document.querySelector(".phone");


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;


    /* Hero background */

    if (heroBackground) {

        heroBackground.style.transform =
            `rotate(-8deg) scale(1.2)
             translateY(${scrollPosition * 0.15}px)`;

    }


    /* Hero soccer ball */

    if (heroBall) {

        heroBall.style.transform =
            `translateY(${scrollPosition * 0.35}px)
             rotate(${scrollPosition * 0.15}deg)`;

    }


    /* First chapter ball */

    if (ballOne) {

        ballOne.style.transform =
            `translateY(${scrollPosition * -0.08}px)
             rotate(${scrollPosition * 0.2}deg)`;

    }


    /* Player */

    if (player) {

        player.style.transform =
            `translateY(${scrollPosition * -0.12}px)
             rotate(${scrollPosition * 0.03}deg)`;

    }


    /* Stadium layers */

    if (stadiumBack) {

        stadiumBack.style.transform =
            `scale(1.2)
             translateY(${scrollPosition * 0.08}px)`;

    }


    if (stadiumMiddle) {

        stadiumMiddle.style.transform =
            `scale(0.8)
             translateY(${scrollPosition * -0.12}px)`;

    }


    /* Phone */

    if (phone) {

        phone.style.transform =
            `translateY(calc(-50% + ${scrollPosition * -0.1}px))
             rotate(8deg)`;

    }

});


/* =========================
   ACTIVE NAVIGATION DOTS
========================= */

const sections =
    document.querySelectorAll(".story-section");

const dots =
    document.querySelectorAll(".dot");


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const index =
                        Array.from(sections)
                        .indexOf(entry.target);

                    dots.forEach((dot) => {
                        dot.classList.remove("active");
                    });

                    if (dots[index]) {
                        dots[index].classList.add("active");
                    }

                }

            });

        },
        {
            threshold: 0.5
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================
   TRAINING HOVER EFFECT
========================= */

const trainingItems =
    document.querySelectorAll(".training-item");

trainingItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.paddingLeft = "15px";

    });

    item.addEventListener("mouseleave", () => {

        item.style.paddingLeft = "0px";

    });

});
