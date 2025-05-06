let h2 = document.querySelector(".heading");
let high = document.querySelector(".highest");
let buttons = document.querySelectorAll(".btn");
let btns = ["yellow", "green", "red", "purple"];
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let users = [];
let highest = [];
let user = prompt("enter your name");
if (users.includes(user) == true) {
  let idx = users.indexOf(user);
  high.innerText = `${user}: highest score- ${highest[idx]}`;
} else {
  users.push(user);
  let idx = users.indexOf(user);
  highest[idx] = 0;

  high.innerText = `${user}: highest score- ${highest[idx]}`;
}

document.addEventListener("keypress", () => {
  if (started == false) {
    started = true;
    levelup();
  }
});
function btnflash(btn) {
  btn.classList.add("pressed");
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function wrongflash(btn) {
  btn.classList.add("wrong");
  setTimeout(function () {
    btn.classList.remove("wrong");
  }, 250);
}

function levelup() {
  level++;
  userSeq = [];
  h2.innerText = `Level ${level}`;
  let randnum = Math.floor(Math.random() * 4);
  let randcolor = btns[randnum];
  gameSeq.push(randcolor);
  let randbtn = document.querySelector(`.${randcolor}`);

  btnflash(randbtn);
}
function checkhighest() {
  let idx = users.indexOf(user);
  if (highest[idx] < level) {
    console.log(level);
    highest[idx] = level;
    high.innerText = `${user}: highest score- ${highest[idx]}`;
  }
}
function reset() {
  started = false;
  gameSeq = [];
  level = 0;
}
function checkAns(index, b) {
  let idx = index;

  if (gameSeq[idx] == userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      checkhighest();
      setTimeout(levelup, 1000);
    }
  } else {
    wrongflash(b);
    h2.innerHTML = `Game Over! Your Score was <b> ${level} </b> <br />Press any key to start.`;
    checkhighest();
    reset();
  }
}
function btnpress() {
  let btn = this;

  userflash(btn);
  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  checkAns(userSeq.length - 1, btn);
}
for (but of buttons) {
  but.addEventListener("click", btnpress);
}
