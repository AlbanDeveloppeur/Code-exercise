const poneys = [
    {
        name: "Pinky Pie",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam. Laborum saepe dolores repudiandae provident repellendus exercitationem perferendis, perspiciatis tempora qui modi incidunt iste inventore earum voluptatem numquam corrupti cum?",
        speed: "65",
        strength: "50",
        charisma: "80",
        image: "./assets/img/pony.png"
    },
    { 
        name: "Rainbow Dash",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam. Laborum saepe dolores repudiandae provident repellendus exercitationem perferendis, perspiciatis tempora qui modi incidunt iste inventore earum voluptatem numquam corrupti cum?",
        speed: "75",
        strength: "80",
        charisma: "90",
        image: "./assets/img/pony2.png"
    },
    {
        name: "Twilight Sparkle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam. Laborum saepe dolores repudiandae provident repellendus exercitationem perferendis, perspiciatis tempora qui modi incidunt iste inventore earum voluptatem numquam corrupti cum?",
        speed: "45",
        strength: "90",
        charisma: "70",
        image: "./assets/img/pony3.png"
    },
    {
        name: "Rarity",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam. Laborum saepe dolores repudiandae provident repellendus exercitationem perferendis, perspiciatis tempora qui modi incidunt iste inventore earum voluptatem numquam corrupti cum?",
        speed: "50",
        strength: "30",
        charisma: "85",
        image: "./assets/img/pony4.png"
    },
    {
        name: "Fluttershy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam. Laborum saepe dolores repudiandae provident repellendus exercitationem perferendis, perspiciatis tempora qui modi incidunt iste inventore earum voluptatem numquam corrupti cum?",
        speed: "64",
        strength: "67",
        charisma: "30",
        image: "./assets/img/pony5.png"
    },
];

const slide = document.querySelector("#slider img");
const slideBox = document.querySelector("#slide-box-img");
const previousSlide = document.querySelector("#previous");
const previousSlideArrow = document.querySelector("#previous-arrow");
const previousDisabled = document.querySelector("#prev-disabled");
const nextSlide = document.querySelector("#next");
const nextSlideArrow = document.querySelector("#next-arrow");
const nextDisabled = document.querySelector("#next-disabled");

const poneyStatsBox = document.querySelector("#box-stats-poney");
const poneyName = document.querySelector("#poney-name");
const poneyDescription = document.querySelector("#poney-description");
const poneySpeed = document.querySelector("#poney-stats-speed .poney-stats-progressbar");
const poneyStrength = document.querySelector("#poney-stats-strength .poney-stats-progressbar");
const poneyCharisma = document.querySelector("#poney-stats-charisma .poney-stats-progressbar");

let numero = 0;

ChangeSlide(0);

previousSlide.addEventListener("click", function() {
    ChangeSlide(-1);
});
nextSlide.addEventListener("click", function() {
    ChangeSlide(1);
});
slideBox.addEventListener("mouseenter", function() {
    ShowPoneyStats(numero);
});
slideBox.addEventListener("mouseleave", function() {
    poneyStatsBox.classList.add("d-none");
});

function ChangeSlide(sens) {
    if (numero + sens >= 0 && numero + sens < poneys.length) {
        numero = numero + sens;

        checkArrow();

        slide.src = poneys[numero]["image"];
    }
}

function checkArrow() {
    previousSlideArrow.classList.remove("d-none");
    nextSlideArrow.classList.remove("d-none");
    previousDisabled.classList.add("d-none");
    nextDisabled.classList.add("d-none");

    if (numero === 0) {
        previousDisabled.classList.remove("d-none");
        previousSlideArrow.classList.add("d-none");
    }

    if (numero === 4) {
        nextDisabled.classList.remove("d-none");
        nextSlideArrow.classList.add("d-none");
    }
}

function ShowPoneyStats(numero) {
    poneyStatsBox.classList.remove("d-none");

    poneyName.innerHTML = poneys[numero]["name"];
    poneyDescription.innerHTML = poneys[numero]["description"];
    poneySpeed.style.width = poneys[numero]["speed"] + "%";
    poneyStrength.style.width = poneys[numero]["strength"] + "%";
    poneyCharisma.style.width = poneys[numero]["charisma"] + "%";

}
