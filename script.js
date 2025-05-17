document.getElementById("lanjutBtn").addEventListener("click", function () {
  document.getElementById("slide1").classList.add("hidden");
  document.getElementById("slide2").classList.remove("hidden");

  const audio = document.getElementById("bgm");
  if (audio) {
    audio.play().catch((err) => {
      console.error("Autoplay blocked:", err);
    });
  }
});
