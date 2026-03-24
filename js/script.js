function showSection(id){
 
document.querySelectorAll(".section").forEach(section=>{
section.style.display="none";
});
 
document.getElementById(id).style.display="block";
}
 
let language="en";
 
function toggleLanguage(){
 
language = language==="en" ? "es" : "en";
document.querySelectorAll("[data-en]").forEach(element=>{

const translation = element.getAttribute("data-" + language);

if(translation){
	element.textContent = translation;
}

});
}

var map = L.map("map").setView([3.4516,-76.5320],13);
L.tileLayer(
 
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);
 
 
 
var locations=[
 
[3.4516,-76.5320,"Plaza de Cayzedo"],
[3.4528,-76.5319,"La Ermita"],
[3.4535,-76.5326,"Boulevard del Río"],
[3.433,-76.545,"Cristo Rey"]
];

locations.forEach(function(place){
L.marker([place[0],place[1]])
.addTo(map)
.bindPopup(place[2]);
});

showSection("culture");
