const targetDate = new Date("October 19, 2026 23:59:59").getTime();

const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("msge");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "00d 00h 00m 00s";
    messageElement.innerHTML = "🎉 Countdown Complete!It's Your Day ,  Happy Birthday To You ! 🎉";
  }
}, 1000);