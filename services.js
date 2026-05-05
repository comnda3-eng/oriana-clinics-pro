const services = [
  {
    title: "حقن الفيلر",
    desc: "إبراز وتحديد الملامح بأحدث التقنيات.",
    price: "اسألي عن السعر"
  }
];

const container = document.getElementById("servicesContainer");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${service.title}</h3>
    <p>${service.desc}</p>
    <strong>${service.price}</strong>
  `;
  container.appendChild(card);
});
