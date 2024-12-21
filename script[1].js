
const countries = [
  { name: "Saudi Arabia", attractions: ["Kaaba", "Masjid-e-Nabwi", "Historic Jeddah"], image: "https://example.com/images/kaaba.jpg" },
  { name: "Japan", attractions: ["Mount Fuji", "Tokyo Tower", "Cherry Blossoms"], image: "https://example.com/images/japan.jpg" },
  { name: "India", attractions: ["Taj Mahal", "Jaipur", "Kerala Backwaters"], image: "https://example.com/images/india.jpg" },
  { name: "Thailand", attractions: ["Phuket Beaches", "Floating Markets", "Grand Palace"], image: "https://example.com/images/thailand.jpg" },
  { name: "China", attractions: ["Great Wall", "Forbidden City", "Terracotta Army"], image: "https://example.com/images/china.jpg" },
  { name: "Indonesia", attractions: ["Bali", "Borobudur Temple", "Komodo Island"], image: "https://example.com/images/indonesia.jpg" },
];

const countryListElement = document.getElementById("country-list");
const searchInput = document.getElementById("searchInput");

function displayCountries(filter = "") {
  countryListElement.innerHTML = "";
  countries
    .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(country => {
      const countryElement = document.createElement("div");
      countryElement.className = "country";
      countryElement.innerHTML = `
        <img src="${country.image}" alt="${country.name}">
        <h3>${country.name}</h3>
        <p>Attractions: ${country.attractions.join(", ")}</p>
      `;
      countryListElement.appendChild(countryElement);
    });
}

searchInput.addEventListener("input", () => {
  displayCountries(searchInput.value);
});

// Initial display of countries
displayCountries();
