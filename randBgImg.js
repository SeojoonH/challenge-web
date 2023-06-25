const images = [
  "https://p4.wallpaperbetter.com/wallpaper/247/911/701/hi-def-nature-pictures-2560x1440-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/397/255/717/high-definition-nature-sceneries-pictures-1920x1200-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/542/369/209/hi-def-nature-pictures-2560x1440-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/1022/987/829/hd-high-definition-nature-download-1920x1200-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/367/766/507/high-resolution-images-of-nature-1920x1200-wallpaper-preview.jpg",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${randomImg}`;

document.body.appendChild(bgImage);
