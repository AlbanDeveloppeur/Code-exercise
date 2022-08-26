const poneys = [
  {
    name: "Pinky Pie",
    strength: "50",
    speed: "65",
    charisma: "80"
  },
  {
    name: "Rainbow Dash",
    strength: "80",
    speed: "75",
    charisma: "90"
  },
  {
    name: "Twilight Sparkle",
    strength: "90",
    speed: "45",
    charisma: "70"
  },
  {
    name: "Rarity",
    strength: "30",
    speed: "50",
    charisma: "85"
  },
  {
    name: "Fluttershy",
    strength: "67",
    speed: "64",
    charisma: "30"
  }
];

const buttons = document.querySelectorAll("[data-carousel-button]");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
		console.log("click");
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides");

    const activeSlide = slides.querySelector("[data-active");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.lenght - 1;
    if (newIndex >= slides.children.lenght) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});