document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".search");

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
            "614f8a7d37msh7ad07e10a05b3bbp105d31jsnb5fd680ed071",
          "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();
      const rawData = await result.results;
      console.log(rawData);

      let city = rawData[0].city;
      let thumbnail = rawData[0].images[0];
      let hotelname = rawData[0].name;
      // let facility=rawData[0].previewAmenities[0],previewAmenities[1],previewAmenities[2];
      let facility = [
        rawData[0].previewAmenities[0],
        rawData[0].previewAmenities[1],
        rawData[0].previewAmenities[2],
      ];

      console.log(city, thumbnail, hotelname, facility);

      // Assuming you have a div with class "card" where you want to display the result
      const card = document.querySelector(".card");

      // Clear previous search results
      card.innerHTML = "";

      // Assuming result is an array of places
      result.forEach((place) => {
        card.innerHTML += `
          <div class="image">
            <img src="${thumbnail}" alt="${city}" />
          </div>
          <div class="name">
            <h2>${city}</h2>
            <p><i class="ri-star-s-fill"></i> ${place.rate}</p>
          </div>
          <div class="price">
            <p>${place.price}</p>
          </div>
        `;
      });
    } catch (error) {
      console.error(error);
    }
  };

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetchData();
  });
});

// FOR OTHERS PAGE
const images = [
  "https://a0.muscache.com/im/pictures/1538239a-c39d-4d21-83c9-7b6b685e2e30.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-50647280/original/9ea9db37-2a5e-4729-9a3d-c71c31b297f2.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/3ec05463-d104-4a09-a52a-516ec6965937.jpg?im_w=720",

  // Add more image URLs here if needed
];

let currentIndex = 0;
const sliderImage = document.querySelector(".slider-image");

function changeImage() {
  sliderImage.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 5 seconds
setInterval(changeImage, 2000);
