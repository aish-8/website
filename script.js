function yesClicked() {
  hideAll();
  document.getElementById("yes").classList.remove("hidden");
}

function noClicked() {
  hideAll();
  document.getElementById("no").classList.remove("hidden");
}

function back() {
  hideAll();
  document.getElementById("question").classList.remove("hidden");
}

function showLetter() {
  hideAll();
  document.getElementById("letter").classList.remove("hidden");
}

function hideAll() {
  document.querySelectorAll(".container").forEach(div => {
    div.classList.add("hidden");
  });
}
const heartContainer = document.querySelector(".hearts");
const heartEmojis = ["💖", "💕", "💗", "💘", "💓"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

function openGift(number) {
  hideAll();
  document.getElementById("gift" + number).classList.remove("hidden");
}

function backToGifts() {
  hideAll();
  document.getElementById("yes").classList.remove("hidden");
}


