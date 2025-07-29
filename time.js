function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour >= 4 && hour < 11) {
    greeting = "Selamat Pagi 🌅";
  } else if (hour >= 11 && hour < 15) {
    greeting = "Selamat Siang 🌞";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Selamat Sore 🌇";
  } else {
    greeting = "Selamat Malam 🌙";
  }

  document.getElementById("greeting").innerText = greeting;
}

getGreeting();
