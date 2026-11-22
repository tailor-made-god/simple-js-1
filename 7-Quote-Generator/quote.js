const getDisplay = document.getElementById("display");
const getSubmit = document.getElementById("submit");

let lastIndex = -1;

const quotes = [
  '"The secret of getting ahead is getting started." — Mark Twain',
  '"Knowing yourself is the beginning of all wisdom." — Aristotle',
  '"Turn your wounds into wisdom." — Oprah Winfrey',
  '"What we achieve inwardly will change outer reality." — Plutarch',
  '"Do what you can, with what you have, where you are." — Theodore Roosevelt',
  '"A smooth sea never made a skilled sailor." — Franklin D. Roosevelt',
  '"He who has a why to live can bear almost any how." — Friedrich Nietzsche',
  '"Doubt kills more dreams than failure ever will." — Suzy Kassem',
  '"The only true wisdom is in knowing you know nothing." — Socrates',
  '"Action is the foundational key to all success." — Pablo Picasso',
];

getSubmit.addEventListener("click", () => {
  let number;
  do {
    number = Math.floor(Math.random() * quotes.length);
  } while (number === lastIndex && quotes.length > 1);

  lastIndex = number;
  getDisplay.textContent = quotes[number];
});
