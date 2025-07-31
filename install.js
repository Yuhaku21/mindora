// install.js

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

// Sembunyikan tombol saat awal (jaga-jaga jika tidak pakai d-none)
installBtn.style.display = "none";

// Tangkap event sebelum install prompt muncul
window.addEventListener("beforeinstallprompt", (e) => {
  // Mencegah prompt otomatis
  e.preventDefault();
  deferredPrompt = e;

  // Tampilkan tombol install
  installBtn.style.display = "inline-block";

  installBtn.addEventListener("click", () => {
    // Sembunyikan tombol kembali
    installBtn.style.display = "none";

    // Tampilkan prompt install
    deferredPrompt.prompt();

    // Tunggu respons user
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
