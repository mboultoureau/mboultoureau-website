var i = 0,
    line = 0,
    reverse = false;
var texts = [
    "Futur ingénieur logiciel / sécurité",
    "En recherche d'une alternance",
    "Étudiant en DUT Informatique",
];
var speed = 50; /* The speed/duration of the effect in milliseconds */
var constantSpeed = 3000;

function typeWriter() {
    if (reverse && i >= 0) {
        document.getElementById("typewriter").innerHTML = texts[line].slice(
            0,
            i
        );
        i--;
    } else if (i <= texts[line].length) {
        document.getElementById("typewriter").innerHTML = texts[line].slice(
            0,
            i
        );
        i++;
    }

    if (i == 0 && reverse) {
        reverse = false;
        line = (line + 1) % 3;
    } else if (i == texts[line].length + 1) {
        reverse = true;
    }

    if (i - 1 == texts[line].length) {
        setTimeout(typeWriter, constantSpeed);
    } else {
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// SKILLS
document.querySelectorAll("#skills article").forEach((article) => {
    article.addEventListener("click", (e) => {
        if (e.target.classList.contains("selected")) {
            e.target.classList.remove("selected");
        } else {
            document.querySelectorAll("#skills article").forEach((article) => {
                article.classList.remove("selected");
            });

            e.target.classList.add("selected");
        }
    });
});

// MENU
document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        document.getElementById("menu-button").checked = false;
    });
});
