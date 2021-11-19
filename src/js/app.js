function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateBord() {
  setInterval(() => {
    let randomN = getRandomInt(16);
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

function startMain() {
  const content = document.querySelector('section');
  const sizeBoard = 4;
  const randomN = getRandomInt(sizeBoard ** 2);
  let n = 0;

  for (let i = 0; i < sizeBoard; i += 1) {
    let imgGoblin = '<img class="center" src=https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png>';
    for (let b = 0; b < sizeBoard; b += 1) {
      imgGoblin = (n === randomN) ? imgGoblin : '';

      const div = `<div class = "w" id=${String(n)}>
            ${imgGoblin}
              </div>`;
      content.insertAdjacentHTML('afterbegin', div);
      n += 1;
    }
  }
  updateBord();
}

startMain();
