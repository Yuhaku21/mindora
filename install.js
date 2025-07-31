let deferredPrompt;
const installBtn = document.getElementById("installBtn");

// Sembunyikan tombol (jaga-jaga walau sudah pakai d-none)
installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Tampilkan tombol
  installBtn.classList.remove("d-none");
  installBtn.style.display = "inline-block";

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("✅ User accepted the install prompt");
      } else {
        console.log("❌ User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});
