let btn = document.querySelector(".search");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Hello");
  window.open("http://127.0.0.1:5500/searchPage.html");
});
