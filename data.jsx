import { v4 as uuidv4 } from "uuid";

const restaurants = [
  {
    id: uuidv4(),
    name: "Activated charcoal everyday",
    score: 4,
    image: "./restaurant_imgs/cake.jpg",
    labels: ["artisan", "organic", "chic"],
    gps: 1.4,
  },
  {
    id: uuidv4(),
    name: "Gochujang hexagon",
    score: 2,
    image: "./restaurant_imgs/pancakes.jpg",
    labels: ["artisan", "organic"],
    gps: 1.9,
  },
  {
    id: uuidv4(),
    name: "Snackwave",
    score: 3,
    image: "./restaurant_imgs/pasta.jpg",
    labels: ["artisan", "organic", "cray"],
    gps: 2.2,
  },
];

export default restaurants;
