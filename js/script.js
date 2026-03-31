function showSection(id){

  const sections = document.querySelectorAll(".section");

  if(sections.length > 0){
    sections.forEach(section => {
      section.style.display = "none";
    });

    const target = document.getElementById(id);
    if(target){
      target.style.display = "block";
    }
  }

}

let language = "en";

function toggleLanguage(){

  language = language === "en" ? "es" : "en";

  document.querySelectorAll("[data-en]").forEach(element => {

    const translation = element.getAttribute("data-" + language);

    if(translation){
      element.textContent = translation;
    }

  });

}

function initMapCulture(){

  const mapContainer = document.getElementById("map");
  if(!mapContainer) return;

  const map = L.map("map").setView([3.4516, -76.5320], 14);

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { attribution: "© OpenStreetMap" }
  ).addTo(map);

  const locations = [
    { coords: [3.4516, -76.5320], name: "Plaza de Cayzedo" },
    { coords: [3.4530, -76.5315], name: "Boulevard del Río" },
    { coords: [3.4510, -76.5330], name: "Teatro Municipal" },
    { coords: [3.4528, -76.5319], name: "Iglesia La Ermita" },
    { coords: [3.4512, -76.5335], name: "Iglesia La Merced" },
    { coords: [3.4505, -76.5325], name: "Iglesia San Francisco" }
  ];

  locations.forEach(place => {
    L.marker(place.coords)
      .addTo(map)
      .bindPopup(`<b>${place.name}</b>`);
  });

  const route = locations.map(place => place.coords);

  L.polyline(route, {
    color: "orange",
    weight: 4
  }).addTo(map);

}

function initMapNature(){

  const mapContainer = document.getElementById("map");
  if(!mapContainer) return;

  const map = L.map("map").setView([3.4216, -76.5450], 13);

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: "© OpenStreetMap"
    }
  ).addTo(map);

  const locations = [
    { coords: [3.4330, -76.5450], name: "Cristo Rey" },
    { coords: [3.4005, -76.5300], name: "Ecoparque de la Biodiversidad" },
    { coords: [3.3750, -76.5455], name: "Ecoparque Lago de las Garzas" },
    { coords: [3.4510, -76.5400], name: "Cerro de las Tres Cruces" },
    { coords: [3.4485, -76.5458], name: "Estatua de Sebastián de Belalcázar" },
    { coords: [3.4525, -76.5335], name: "El Gato del Río" }
  ];

  // Marcadores
  locations.forEach(place => {
    L.marker(place.coords)
      .addTo(map)
      .bindPopup(`<b>${place.name}</b>`);
  });

  // Ruta (opcional)
  const route = locations.map(place => place.coords);

  L.polyline(route, {
    color: "green",
    weight: 4,
    opacity: 0.8
  }).addTo(map);

  // Ajustar vista automáticamente
  map.fitBounds(route);

}


document.addEventListener("DOMContentLoaded", function(){

  initSlider();

 const path = window.location.pathname;

  if(path.includes("culture")){
    initMapCulture();
  } 
  else if(path.includes("nature")){
    initMapNature();
  } 
  else {
    initMap(); // opcional (index u otros)
  }

});


function initSlider(){

  const slides = document.querySelectorAll(".slide");

  if(slides.length === 0) return;

  let current = 0;

  slides[0].classList.add("active");

  setInterval(() => {

    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");

  }, 4000);

}

document.addEventListener("DOMContentLoaded", function(){

  initMap();
  initSlider();

});