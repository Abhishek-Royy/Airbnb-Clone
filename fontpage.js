const fData = document.querySelector("#fetch");

const placeData = [
  {
    id: 0,
    name: "Nashik,India",
    price: "₹5,760/night",
    image:
      "https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720",
    rate: 4.87,
  },
  {
    id: 1,
    name: "Tarur,India",
    price: "₹23,965/night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-819818987227302539/original/7c16722c-7e34-46ea-a5b4-f4473c789d65.jpeg?im_w=720",
    rate: 4.01,
  },
  {
    id: 2,
    name: "Coimbator,India",
    price: "₹1,722/night",
    image:
      "https://a0.muscache.com/im/pictures/3aa09cd0-bcec-430e-9f25-7384cffb6a58.jpg?im_w=720",
    rate: 5.0,
  },
  {
    id: 3,
    name: "Margoa,India",
    price: "₹3,722/night",
    image:
      "https://a0.muscache.com/im/pictures/40df5167-217f-4172-9e01-201f1dd4b323.jpg?im_w=720",
    rate: 4.86,
  },
  {
    id: 4,
    name: "Siolim,India",
    price: "₹11,000/night",
    image:
      "https://a0.muscache.com/im/pictures/38f87857-6644-402c-9334-4ab5920c9ffe.jpg?im_w=720",
    rate: 4.87,
  },
  {
    id: 5,
    name: "Ooty,India",
    price: "₹6,920/night",
    image:
      "https://a0.muscache.com/im/pictures/3ec05463-d104-4a09-a52a-516ec6965937.jpg?im_w=720",
    rate: 4.83,
  },
  {
    id: 6,
    name: "Nandi Hills,India",
    price: "₹6,881/night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-50647280/original/9ea9db37-2a5e-4729-9a3d-c71c31b297f2.jpeg?im_w=720",
    rate: 4.88,
  },
  {
    id: 7,
    name: "Koushani,India",
    price: "₹6,075/night",
    image:
      "https://a0.muscache.com/im/pictures/1ab29317-e49b-494f-b25c-d8883e98795a.jpg?im_w=720",
    rate: 4.86,
  },
  {
    id: 8,
    name: "Canacona,India",
    price: "₹16,075/night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-587233838894627911/original/0faa613e-5944-459e-883a-ac801f7532d5.jpeg?im_w=720",
    rate: 4.76,
  },
  {
    id: 9,
    name: "Munnar,Manali,India",
    price: "₹14,175/night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48837541/original/9b2665b5-5f8f-4694-ad4b-7e4e491a90b1.jpeg?im_w=720",
    rate: 4.91,
  },
  {
    id: 10,
    name: "Naggar,India",
    price: "₹4,175/night",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-586640580469243869/original/3b9932e6-7809-4222-b525-6205cb910302.jpeg?im_w=720",
    rate: 4.81,
  },
];

const getAllData = () => {
  const container = document.querySelector(".data-3");

  placeData.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("cards");

    card.innerHTML = `
        <div class="image">
          <img src="${place.image}" alt="${place.name}" />
        </div>
        <div class="name">
          <h2>${place.name}</h2>
          <p><i class="ri-star-s-fill"></i> ${place.rate}</p>
        </div>
        <div class="price">
          <p>${place.price}</p>
        </div>
      `;

    container.appendChild(card);
  });
};

window.addEventListener("load", () => {
  setTimeout(() => {
    getAllData();
  }, 1000);
});
