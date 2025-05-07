// 🎉 Countdown
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-07-07T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);

// 💌 Toggle Letter
function toggleLetter(el) {
  const content = el.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// ✨ Fade In on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 💖 Animated Hearts
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 4 + 2;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();
  this.draw = function() {
    ctx.beginPath();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = '#ff4da6';
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
  this.update = function() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  };
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(heart => heart.update());
  requestAnimationFrame(animateHearts);
}

for (let i = 0; i < 100; i++) {
  hearts.push(new Heart());
}
animateHearts();

function addNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (text !== '') {
    const note = document.createElement('div');
    note.className = 'note';
    note.innerText = text;
    document.getElementById('notes-container').appendChild(note);
    input.value = '';
  }
}


