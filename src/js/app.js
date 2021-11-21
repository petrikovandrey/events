const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const sizeBoard = 4;


function clearStat() {
  lost.textContent = 0;
  dead.textContent = 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkClick() {
  let w = document.querySelectorAll('.square');
  Array.from(w).forEach(element => element.addEventListener('click', function () {
    if (element.childNodes.length > 1) {
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
  }))
}


function updateBord() {

  setInterval(() => {
    let randomN = getRandomInt(sizeBoard ** 2);
    const img = document.querySelector('img');

    if (img != null) {
      while (randomN === img.parentNode.id) {
        randomN = getRandomInt(sizeBoard ** 2);
      }
      img.remove();
      const div = document.getElementById(String(randomN));
      div.insertAdjacentHTML('afterbegin', '<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>');
    }
  }, 1000);
}

function startMain() {
  const content = document.querySelector('section');
  const randomN = getRandomInt(sizeBoard ** 2);
  let n = 0;

  for (let i = 0; i < sizeBoard; i += 1) {
    let imgGoblin = '<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>';
    for (let b = 0; b < sizeBoard; b += 1) {
      const imgElement = (n === randomN) ? imgGoblin : '';

      const div = `<div class = "square" id=${String(n)}>
            ${imgElement}
              </div>`;
      content.insertAdjacentHTML('afterbegin', div);
      n += 1;
    }
  }
  checkClick();
  updateBord();
}

startMain();
