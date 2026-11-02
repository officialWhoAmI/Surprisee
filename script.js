
const content = document.getElementById("content");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let step = 0;

// "არა" ღილაკი გარბის დაჭერის მცდელობისას


let shutdownStarted = false;

function fakeShutdown() {
  if (shutdownStarted) return;
  shutdownStarted = true;

  // საიტი ვითომ ითიშება
  document.body.classList.add("shutdown");

  document.body.innerHTML = `
    <div id="blackScreen">
      <div id="shutdownMessage"></div>
    </div>
  `;

  const message = document.getElementById("shutdownMessage");

  // 1.5 წამი სრული სიბნელე
  setTimeout(() => {
    message.innerHTML = `
      <div class="error-icon">⚠️</div>
      <h1>SYSTEM FAILURE</h1>
      <p>დაფიქსირდა არასწორი გადაწყვეტილება...</p>
    `;
  }, 1500);

  // შემდეგ უარის იგნორირება
  setTimeout(() => {
    message.innerHTML = `
      <div class="error-icon">😂</div>
      <h1>თქვენი უარი მიღებულია...</h1>
      <h2>და სრულიად იგნორირებულია!</h2>
      <p>მართლა გეგონათ, რომ არჩევანის უფლება გქონდათ? 🤣</p>
      <button class="restart-btn" onclick="continueSurprise()">
        კარგი, მაინც ვნახავ სიურპრიზს 🎁
      </button>
    `;
  }, 4000);
}

function continueSurprise() {
  // ვაბრუნებთ საწყის გვერდს
  location.reload();
}

// "არა" ღილაკზე დაჭერა
noBtn.addEventListener("click", fakeShutdown);


// "კი"-ზე დაჭერა
yesBtn.addEventListener("click", nextStep);

function nextStep() {
  step++;

  if (step === 1) {
    content.innerHTML = `
      <div class="gift">🎉</div>
      <h1>გილოცავთ!</h1>
      <p>თქვენ წარმატებით გაიარეთ პირველი ეტაპი!</p>
      <p>ახლა დროა გაიგოთ, რა მოგიმზადეთ... 👀</p>
      <button class="next" onclick="nextStep()">
        გაგრძელება 💝
      </button>
    `;
  }

  else if (step === 2) {
    content.innerHTML = `
      <div class="gift">💎</div>
      <h1>ეს წარმოუდგენელია!</h1>
      <p>თქვენ ძალიან გაგიმართლათ!</p>
      <button class="next" onclick="nextStep()">
        რა მოვიგეთ?! 😍
      </button>
    `;
  }

  else if (step === 3) {
    content.innerHTML = `
      <div class="gift">🎁</div>
      <h1>მზად ხართ?</h1>
      <p>თქვენი საჩუქარი უკვე მზადაა!</p>
      <p>დარჩა მხოლოდ ერთი ღილაკი...</p>
      <button class="next" onclick="nextStep()">
        🎁 გახსენით საჩუქარი
      </button>
    `;
  }

  else if (step === 4) {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 180,
        spread: 110,
        origin: { y: 0.6 }
      });
    }

    content.innerHTML = `
      <div class="gift">🏆</div>
      <h1>გილოცავთ!!! 🎊</h1>
      <p>თქვენ მოიგეთ...</p>
      <h1 class="big-text"> ჩემთან ერთად ყავის დალევა☕😂</h1>
      <p>
        მადლობა, რომ თქვენი ცხოვრების
        ძვირფასი წამები ნაკლებად საინტერესოდ დაკარგეთ. 🤣
      </p>
      <button class="next" onclick="restart()">
        🔄 კიდევ ერთხელ
      </button>
    `;
  }
}

function restart() {
  location.reload();
}
