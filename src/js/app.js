const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const sizeBoard = 16;

function clearStat() {
  lost.textContent = 0;
  dead.textContent = 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateBord() {
  setInterval(() => {
    let randomN = getRandomInt(sizeBoard);
    const img = document.querySelector('img');
    if (img != null) {
      while (randomN === img.parentNode.id) {
        randomN = getRandomInt(16);
      }

      img.remove();
      const div = document.getElementById(String(randomN));
      div.insertAdjacentHTML('afterbegin', '<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>');
    }
  }, 2000);
}

function checkClick() {

  if (this.hasChildNodes()) {
    dead.textContent++;
    if (dead.textContent === "10") {
      alert("You are the winner!");
      clearStat();
    }
  } else {
    lost.textContent++;
    if (lost.textContent === "5") {
      alert("You are the loser!");
      clearStat();
    }
  }
}

function startMain() {
  const content = document.querySelector('section');
  const randomN = getRandomInt(sizeBoard);
  let n = 0;

  for (let i = 0; i < sizeBoard; i += 1) {
    let imgGoblin = '<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>';
    for (let b = 0; b < sizeBoard; b += 1) {
      imgGoblin = (n === randomN) ? imgGoblin : '';

      const div = `<div class = "w" id=${String(n)}>
            ${imgGoblin}
              </div>`;
      content.insertAdjacentHTML('afterbegin', div);
      div.onClick = checkClick;
      n += 1;
    }
  }
  updateBord();
}

startMain();
