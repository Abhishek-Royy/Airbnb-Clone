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
      const url = `https://airbnb13.p.rapidapi.com/search-location?location=${locationInput}&checkin=${checkinInput}&checkout=${checkoutInput}&adults=${numGuestInput}&children=0&infants=0&pets=0&page=1&currency=USD`;
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
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Fetching data...");
    fetchData();
  });
});
