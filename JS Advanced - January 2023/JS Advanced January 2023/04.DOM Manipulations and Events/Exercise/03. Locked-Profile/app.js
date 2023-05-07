function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll(".profile button"));

    profiles.forEach((button) => button.addEventListener("click", onClick));

    function onClick(event) {
        const profile = event.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;

        if (isActive) {
            const info = profile.querySelector("div");

            if (event.target.textContent === "Show more") {
                info.style.display = "block";
                profile.querySelector("button").textContent = "Hide it";
            } else {
                info.style.display = "none";
                profile.querySelector("button").textContent = "Show more";
            }
        }
    }
}
