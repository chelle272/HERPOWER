// =========================================
// HERPOWER
// Statistics JavaScript
// =========================================


// ---------- ANIMATED COUNTERS ----------

const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {

    const target = parseFloat(
        counter.getAttribute("data-target")
    );

    let current = 0;

    const increment = target / 60;


    const updateCounter = () => {

        current += increment;


        if (current < target) {

            counter.textContent =
                current.toFixed(1);

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent =
                target.toFixed(1);

        }

    };


    updateCounter();

});



// ---------- ANIMATED BAR CHART ----------

const bars = document.querySelectorAll(".bar");


const barObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width =
                    bar.getAttribute("data-width");

                bar.style.width =
                    width + "%";

                barObserver.unobserve(bar);

            }

        });

    },

    {
        threshold: 0.3
    }

);


bars.forEach(bar => {

    barObserver.observe(bar);

});