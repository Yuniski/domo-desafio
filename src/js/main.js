import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import Swal from "sweetalert2";

const author = document.getElementById("author");

author.addEventListener("click", () => {
  const darkBlue = "#1D2D44";
  const light = "#F0EBD8";

  Swal.fire({
    title: "Thanks for watching!",
    text: "In this section you can find useful links to check out my work and contact me ❤️",
    // color: darkBlue,
    color: darkBlue,
    background: light,
    icon: "info",
    confirmButtonText: "Ok!",
  });
});
