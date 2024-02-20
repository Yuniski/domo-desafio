import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";

import headphonesImg from "@img/auriculares.jpg";
import microphonesImg from "@img/mic-lateral.jpg";
import pluginsImg from "@img/vinyl.jpg";
import speakersImg from "@img/altavoz.jpg";

// Image Zoom
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const imgArr = [img1, img2, img3];

imgArr.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.3)";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Authour Popup
const author = document.getElementById("author");
const darkBlue = "#1D2D44";
const light = "#F0EBD8";

author.addEventListener("click", () => {
  Swal.fire({
    title: "Thanks for watching!",
    text: "In this section you can find useful links to check out my work and contact me ❤️",
    color: darkBlue,
    background: light,
    icon: "info",
    confirmButtonText: "Ok!",
  });
});

// Products Popups
const products = [
  {
    id: "headphones-btn",
    title: "Headphones",
    imageUrl: headphonesImg,
    imageAlt: "Black Headphones",
    imageWidth: 400,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ea.",
  },
  {
    id: "microphones-btn",
    title: "Microphones",
    imageUrl: microphonesImg,
    imageAlt: "Microphone",
    imageWidth: 400,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ea.",
  },
  {
    id: "plugins-btn",
    title: "Plugins",
    imageUrl: pluginsImg,
    imageAlt: "Vinyl",
    imageWidth: 400,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ea.",
  },
  {
    id: "speakers-btn",
    title: "Headphones",
    imageUrl: speakersImg,
    imageAlt: "Speakers",
    imageWidth: 400,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ea.",
  },
];

products.forEach((product) => {
  const productBtn = document.getElementById(product.id);
  productBtn.addEventListener("click", () => {
    Swal.fire({
      title: product.title,
      text: product.text,
      color: darkBlue,
      background: light,
      imageUrl: product.imageUrl,
      imageAlt: product.imageAlt,
      imageWidth: product.imageWidth,
      confirmButtonText: "Ok!",
    });
  });
});
