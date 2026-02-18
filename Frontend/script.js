document.addEventListener('DOMContentLoaded', function() {

  /* ================= TERMINAL (index.html) ================= */
  const greetings = [
  "HELLO THERE !",
  "WELCOME, HOMIE.",
  "GOOD TO SEE YOU.",
  "I AM SO HAPPY, YOU MADE IT HERE.",
  "HEY, YOU FOUND ME.",
  "IT'S SO NICE TO HAVE YOU HERE.",
  "HEY, FRIEND.",
  "LOOK WHO'S HERE.",
  "YOU'RE RIGHT ON TIME.",
  "SO NICE TO HAVE YOU HERE.",
  "HAPPY YOU DROPPED BY.",
  "A WARM WELCOME TO YOU.",
  "WE'RE GLAD YOU'RE HERE.",
  "GLAD YOU MADE IT. FEEL FREE TO LOOK AROUND.",
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const terminalText = document.querySelector('.terminal-body');
if (terminalText) {
  setTimeout(() => terminalText.innerHTML += '<p>> System ready.</p>', 2000);
  setTimeout(() => terminalText.innerHTML += '<p>> Initialisation successful.</p>', 4000);
  setTimeout(() => terminalText.innerHTML += '<p>> Found a message by Host.</p>', 6000);

  setTimeout(() => {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = randomGreeting;
    terminalText.appendChild(cursor);

    setInterval(() => {
      cursor.style.visibility =
        cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
  }, 7000);
}


  /* ================= ABOUT PAGE SKILL BARS ================= */
  const bars = document.querySelectorAll('.skill-bar');
  if (bars.length) {
    bars.forEach(el => {
      el.style.width = '0%';
      setTimeout(() => {
        el.style.width = '60%';
      }, 300);
    });
  }

  /* ================= PROJECT CARD CLICK ================= */
  const cards = document.querySelectorAll('.project-card');
  if (cards.length) {
    cards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-link')) return;
        const link = card.querySelector('.project-link');
        if (link && link.href) window.open(link.href, '_blank');
      });
    });
  }

  /* ================= HAMBURGER MENU (ALL PAGES) ================= */
  const burger = document.getElementById('hamburger-menu');
  const nav = document.querySelector('.nav-list');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });

    // close menu when clicking link (mobile UX)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
      });
    });
  }

  /* ================= AOS INIT ================= */
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

});
