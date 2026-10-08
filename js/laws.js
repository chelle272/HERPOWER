// =========================================
// HERPOWER
// Laws & Rights JavaScript
// =========================================


// ---------- LAW INFORMATION ----------

const lawData = {

    ra9710: {

        badge: "RA 9710",

        title: "Magna Carta of Women",

        description:
            "Republic Act No. 9710 is a comprehensive women's human rights law that promotes the empowerment of women and recognizes their rights to equality, non-discrimination, participation, and equal access to opportunities and resources.",

        details:
            "The law covers areas including protection from discrimination, education, employment, health, participation and representation, economic opportunities, and other aspects of women's human rights.",

        source:
            "Source: Philippine Commission on Women — Republic Act No. 9710, Magna Carta of Women."

    },


    ra11313: {

        badge: "RA 11313",

        title: "Safe Spaces Act",

        description:
            "Republic Act No. 11313, known as the Safe Spaces Act, addresses gender-based sexual harassment in streets and public spaces, online spaces, workplaces, and educational or training institutions.",

        details:
            "The law establishes prohibited acts and corresponding responsibilities and mechanisms intended to help prevent and address gender-based sexual harassment.",

        source:
            "Source: Republic Act No. 11313, Safe Spaces Act."

    },


    ra7877: {

        badge: "RA 7877",

        title: "Anti-Sexual Harassment Act of 1995",

        description:
            "Republic Act No. 7877 declares sexual harassment unlawful in employment, education, and training environments.",

        details:
            "The law identifies sexual harassment in the workplace and educational or training settings and establishes duties and responsibilities for institutions and persons covered by the law.",

        source:
            "Source: Republic Act No. 7877, Anti-Sexual Harassment Act of 1995."

    },


    ra11210: {

        badge: "RA 11210",

        title: "105-Day Expanded Maternity Leave Law",

        description:
            "Republic Act No. 11210 provides maternity leave benefits and related protections for covered female workers.",

        details:
            "The law provides 105 days of maternity leave with full pay for qualified female workers, subject to the conditions and provisions established by the law. It also contains additional provisions for qualified solo mothers and an optional extension.",

        source:
            "Source: Republic Act No. 11210, 105-Day Expanded Maternity Leave Law."

    }

};



// ---------- MODAL ELEMENTS ----------

const lawModal =
    document.getElementById("lawModal");

const modalClose =
    document.getElementById("modalClose");

const modalBadge =
    document.getElementById("modalBadge");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalDetails =
    document.getElementById("modalDetails");

const modalSource =
    document.getElementById("modalSource");



// ---------- OPEN MODAL ----------

const lawButtons =
    document.querySelectorAll(".law-button");


lawButtons.forEach(button => {

    button.addEventListener("click", () => {

        const law =
            button.getAttribute("data-law");

        const selectedLaw =
            lawData[law];


        if (!selectedLaw) {
            return;
        }


        modalBadge.textContent =
            selectedLaw.badge;

        modalTitle.textContent =
            selectedLaw.title;

        modalDescription.textContent =
            selectedLaw.description;

        modalDetails.textContent =
            selectedLaw.details;

        modalSource.textContent =
            selectedLaw.source;


        lawModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});



// ---------- CLOSE MODAL ----------

function closeLawModal() {

    lawModal.classList.remove("show");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeLawModal
);



// ---------- CLOSE WHEN CLICKING OUTSIDE ----------

lawModal.addEventListener(
    "click",
    event => {

        if (
            event.target === lawModal
        ) {

            closeLawModal();

        }

    }
);



// ---------- CLOSE WITH ESC KEY ----------

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            lawModal.classList.contains("show")
        ) {

            closeLawModal();

        }

    }
);