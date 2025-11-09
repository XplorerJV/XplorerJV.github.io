// Typewriter
const typing = document.querySelector('.typing');
const words = [
  "Java & IoT Developer 💻",
  "Full-Stack Problem Solver 🚀",
  "Tech Explorer | Innovator ✨"
];
let i = 0, j = 0, deleting = false;

function type() {
  const current = words[i];
  typing.textContent = current.substring(0, j);

  if (!deleting && j < current.length) j++, setTimeout(type, 100);
  else if (deleting && j > 0) j--, setTimeout(type, 50);
  else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % words.length;
    setTimeout(type, 1000);
  }
}
type();

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

// Active nav highlight
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 80;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      appear.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach(fader => appear.observe(fader));

// Animated particles background
const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
let particles = [];
const colors = ['#58a6ff','#7ee8fa','#1f6feb'];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 70; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
