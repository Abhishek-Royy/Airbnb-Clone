document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".search");
  const cardsContainer = document.querySelector(".cards-all");

  let isLoading = document.querySelector("#loading");

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const fetchData = async () => {
    const locationInput = document.querySelector("#location").value;
    const checkinInput = formatDate(document.querySelector("#checkin").value);
    const checkoutInput = formatDate(document.querySelector("#checkout").value);
    const numGuestInput = document.querySelector("#guest").value;

    try {
      const url = `https://airbnb13.p.rapidapi.com/search-location?location=${locationInput}&checkin=${checkinInput}&checkout=${checkoutInput}&adults=${numGuestInput}&children=0&infants=0&pets=0&page=1&currency=INR`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "661fe397f5msh04776212a7a735cp166659jsn7fd82bc0a017",
          "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();
      const rawData = result.results;

      // Clear previous search results
      cardsContainer.innerHTML = ""; // Changed card to cardsContainer

      // Assuming result is an array of places
      rawData.forEach((place) => {
        const city = place.city;
        const thumbnail = place.images[0];
        const hotelname = place.name;
        const rate = place.rating;
        const price = place.price.priceItems[0];

        // Create card element
        const card = document.createElement("div");
        card.classList.add("card"); // Add card class to the created element
        card.innerHTML = `
          <div class="image">
            <img src="${thumbnail}" alt="${city}" />
          </div>
          <div class="name">
            <h5>${hotelname}</h5>
            <p><i class="ri-star-s-fill"></i> ${rate}</p>
          </div>
          <div class="price">
            <p>${city}</p>
            <p>₹:${price.amount}</p>
          </div>
        `;

        // Append card to the cardsContainer
        cardsContainer.appendChild(card);
      });

      cardsContainer.style.display = "flex";
    } catch (error) {
      console.error(error);
    }
  };

  // Attach event listeners to all buttons with class "search"
  btns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      isLoading.style.display = "block";
      await fetchData();
    });
  });
});
