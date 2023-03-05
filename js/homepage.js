const videoHomepage = document.getElementById("video-desktop");
const videoMobile = document.getElementById("video-mobile");
const loader = document.querySelector(".loader");

videoHomepage.addEventListener(
  "ended",
  () => {
    loader.remove();
    videoHomepage.style.display = "none";
  },
  false
);

videoMobile.addEventListener(
  "ended",
  () => {
    loader.remove();
    videoMobile.style.display = "none";
  },
  false
);

videoHomepage.addEventListener("click", () => {
  loader.remove();
  videoHomepage.style.display = "none";
});

videoMobile.addEventListener("click", () => {
  loader.remove();
  videoMobile.style.display = "none";
});
