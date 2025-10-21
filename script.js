// Initialisation de la carte Leaflet
const map = L.map('map', {
  crs: L.CRS.Simple, // système de coordonnées simple (pour une image)
  minZoom: -2,
  maxZoom: 2
});

// Image de fond (ta carte Minecraft exportée)
const imageUrl = 'https://ton-image-url.png'; // ⚠️ remplace par ton image hébergée
const imageWidth = 4096; // largeur de l'image (en pixels)
const imageHeight = 4096; // hauteur de l'image (en pixels)
const bounds = [[0, 0], [imageHeight, imageWidth]];

// Ajouter l'image comme fond de carte
L.imageOverlay(imageUrl, bounds).addTo(map);
map.fitBounds(bounds);

// Exemple de markers (à personnaliser)
const points = [
  { name: 'Village', x: 2000, y: 2500, desc: 'Petit village paisible' },
  { name: 'Base principale', x: 1800, y: 3000, desc: 'Base sécurisée de l’équipe' },
  { name: 'Mines anciennes', x: 1000, y: 1500, desc: 'Vieilles galeries abandonnées' }
];

// Ajout des marqueurs sur la carte
points.forEach(p => {
  const marker = L.marker([p.y, p.x]).addTo(map);
  marker.bindPopup(`<b>${p.name}</b><br>${p.desc}`);
});

