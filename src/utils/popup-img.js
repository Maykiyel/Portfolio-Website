const viewImg = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".featured__img");

    images.forEach((img) => {
      img.addEventListener("click", function () {
        if (window.innerWidth >= 768) {
          const popup = document.getElementById("popup");
          const popupImg = document.getElementById("popupImg");
          const popupClose = document.getElementById("popupClose");

          popup.style.display = "flex";
          popupImg.src = this.getAttribute("data-src");

          popupClose.addEventListener("click", function () {
            popup.style.display = "none";
          });
        }
      });
    });
  });
};

export default viewImg;
