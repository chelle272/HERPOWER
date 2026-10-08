// =========================================
// HERPOWER
// Inspiring Women JavaScript
// =========================================


// =========================================
// FILTER WOMEN
// =========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const womanCards = document.querySelectorAll(".woman-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");


        womanCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 200);

            }

        });

    });

});


// =========================================
// WOMEN STORY DATA
// =========================================

const womanData = {

    fe: {

        badge: "SCIENCE & MEDICINE",

        title: "Dr. Fe del Mundo",

        description:
            "Dr. Fe del Mundo was a pioneering Filipino pediatrician whose work contributed greatly to children's healthcare in the Philippines. Her career demonstrated how women could make lasting contributions to medicine and public health.",

        lesson:
            "Knowledge and dedication can open doors for women in fields where they were once underrepresented.",

        source:
            "Source: National Commission for Culture and the Arts (NCCA) and Philippine historical records."

    },


    maria: {

        badge: "MEDIA & JOURNALISM",

        title: "Maria Ressa",

        description:
            "Maria Ressa is a Filipino journalist and co-founder of Rappler. She was awarded the 2021 Nobel Peace Prize for her efforts to safeguard freedom of expression and defend democratic values.",

        lesson:
            "A woman's voice can have a powerful role in defending truth, accountability, and freedom of expression.",

        source:
            "Source: Nobel Prize, 2021."

    },


    hidilyn: {

        badge: "SPORTS",

        title: "Hidilyn Diaz",

        description:
            "Hidilyn Diaz is a Filipino weightlifter who made history by winning the Philippines' first Olympic gold medal at the Tokyo 2020 Olympic Games.",

        lesson:
            "Persistence and equal opportunities in sports can help women reach the highest levels of achievement.",

        source:
            "Source: International Olympic Committee (IOC)."

    },


    aisa: {

        badge: "SCIENCE & INNOVATION",

        title: "Aisa Mijeno",

        description:
            "Aisa Mijeno is a Filipino engineer and social entrepreneur associated with sustainable technology and the development of alternative lighting solutions designed for communities without reliable electricity.",

        lesson:
            "Innovation becomes more meaningful when it responds to real community needs.",

        source:
            "Source: ASEAN and public profiles of Aisa Mijeno's work."

    },


    corazon: {

        badge: "LEADERSHIP",

        title: "Corazon Aquino",

        description:
            "Corazon Aquino became the first woman president of the Philippines. Her presidency became an important chapter in the country's democratic history and demonstrated women's capacity for national leadership.",

        lesson:
            "Leadership is not limited by gender. Women can participate in shaping the future of their communities and countries.",

        source:
            "Source: Official Philippine historical records."

    },


    lea: {

        badge: "ARTS & PERFORMANCE",

        title: "Lea Salonga",

        description:
            "Lea Salonga is a Filipino singer and actress who achieved international recognition through her work in musical theatre, including Broadway productions. Her achievements helped showcase Filipino talent on the global stage.",

        lesson:
            "Talent grows when people are given the confidence and opportunity to pursue their dreams.",

        source:
            "Source: Broadway and official biographical records."

    }

};


// =========================================
// STORY MODAL
// =========================================

const storyButtons = document.querySelectorAll(".story-button");

const storyModal = document.getElementById("storyModal");

const storyClose = document.getElementById("storyClose");

const storyBadge = document.getElementById("storyBadge");

const storyTitle = document.getElementById("storyTitle");

const storyDescription = document.getElementById("storyDescription");

const storyLesson = document.getElementById("storyLesson");

const storySource = document.getElementById("storySource");


storyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const woman = button.getAttribute("data-woman");

        const data = womanData[woman];

        if (!data) return;


        storyBadge.textContent = data.badge;

        storyTitle.textContent = data.title;

        storyDescription.textContent = data.description;

        storyLesson.textContent = data.lesson;

        storySource.textContent = data.source;


        storyModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


// =========================================
// CLOSE MODAL
// =========================================

if (storyClose) {

    storyClose.addEventListener("click", closeStory);

}


if (storyModal) {

    storyModal.addEventListener("click", event => {

        if (event.target === storyModal) {

            closeStory();

        }

    });

}


function closeStory() {

    storyModal.classList.remove("show");

    document.body.style.overflow = "";

}


// =========================================
// ESC KEY
// =========================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeStory();

    }

});