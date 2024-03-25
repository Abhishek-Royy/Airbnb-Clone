// api.js

const data = [
  {
    id: 0,
    name: "Nashik,India",
    price: "₹5,760/night",
    image: "https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720",
    rate: 4.87
  },
  {
    id: 1,
    name: "Tarur,India",
    price: "₹23,965/night",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-819818987227302539/original/7c16722c-7e34-46ea-a5b4-f4473c789d65.jpeg?im_w=720",
    rate: 4.01
  },
  {
    id: 2,
    name: "Coimbator,India",
    price: "₹1,722/night",
    image: "https://a0.muscache.com/im/pictures/3aa09cd0-bcec-430e-9f25-7384cffb6a58.jpg?im_w=720",
    rate: 5.0
  },
  {
    id: 3,
    name: "Margoa,India",
    price: "₹3,722/night",
    image: "https://a0.muscache.com/im/pictures/40df5167-217f-4172-9e01-201f1dd4b323.jpg?im_w=720",
    rate: 4.86
  },
  {
    id: 4,
    name: "Siolim,India",
    price: "₹11,000/night",
    image: "https://a0.muscache.com/im/pictures/38f87857-6644-402c-9334-4ab5920c9ffe.jpg?im_w=720",
    rate: 4.87
  },
  {
    id: 5,
    name: "Ooty,India",
    price: "₹6,920/night",
    image: "https://a0.muscache.com/im/pictures/3ec05463-d104-4a09-a52a-516ec6965937.jpg?im_w=720",
    rate: 4.83
  },
  {
    id: 6,
    name: "Nandi Hills,India",
    price: "₹6,881/night",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-50647280/original/9ea9db37-2a5e-4729-9a3d-c71c31b297f2.jpeg?im_w=720",
    rate: 4.88
  },
  {
    id: 7,
    name: "Nashik,India",
    price: "₹6,075/night",
    image: "https://a0.muscache.com/im/pictures/1ab29317-e49b-494f-b25c-d8883e98795a.jpg?im_w=720",
    rate: 4.86
  }
];

// Set the appropriate headers to indicate that this is JSON data
const headers = new Headers({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
});

// Create a new Response object with the JSON data and headers
const response = new Response(JSON.stringify(data), {
  headers: headers,
  status: 200
});

// Return the response
self.addEventListener("fetch", event => {
  event.respondWith(Promise.resolve(response));
});
