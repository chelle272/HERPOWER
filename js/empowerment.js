// =========================================
// HERPOWER
// Take Action JavaScript
// =========================================


// =========================================
// ACTION CHECKLIST
// =========================================

const actionButtons = document.querySelectorAll(".action-check");

const progressNumber = document.getElementById("progressNumber");

let completedActions = 0;

const totalActions = actionButtons.length;


actionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".action-card");


        if (!card.classList.contains("completed")) {

            card.classList.add("completed");

            button.textContent = "✓ Completed";

            completedActions++;

        } else {

            card.classList.remove("completed");

            button.textContent = "Mark as Done";

            completedActions--;

        }


        updateProgress();

    });

});


// =========================================
// UPDATE PROGRESS
// =========================================

function updateProgress() {

    if (totalActions === 0) return;

    const percentage =
        Math.round((completedActions / totalActions) * 100);

    progressNumber.textContent = percentage + "%";

}


// =========================================
// COMMITMENT BUTTON
// =========================================

const commitButton =
    document.getElementById("commitButton");

const commitMessage =
    document.getElementById("commitMessage");


if (commitButton) {

    commitButton.addEventListener("click", () => {

        commitButton.textContent = "✓ Commitment Made";

        commitButton.classList.add("committed");

        commitMessage.textContent =
            "Thank you for choosing to support equality and respect.";

    });

}