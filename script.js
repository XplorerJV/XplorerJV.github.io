// Typewriter Effect
const typing = document.querySelector('.typing');
const words = ["Java & IoT Developer 💻","Full-Stack Problem Solver 🚀","Tech Explorer | Innovator ✨"];
let i = 0, j = 0, deleting = false;
function type() {
  const current = words[i];
  typing.textContent = current.substring(0, j);
  if (!deleting && j < current.length) j++, setTimeout(type, 100);
  else if (deleting && j > 0) j--, setTimeout(type, 50);
  else { deleting = !deleting; if(!deleting) i=(i+1)%words.length; setTimeout(type,1000);}
}
type();

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) window.scrollTo({top:target.offsetTop-70,behavior:'smooth'});
  });
});

// Active nav highlight
window.addEventListener('scroll',()=>{
  const fromTop=window.scrollY+80;
  document.querySelectorAll('.nav-links a').forEach(link=>{
    const section=document.querySelector(link.getAttribute('href'));
    if(section.offsetTop<=fromTop && section.offsetTop+section.offsetHeight>fromTop) link.classList.add('active');
    else link.classList.remove('active');
  });
});

// Fade-in
const faders=document.querySelectorAll('.fade-in');
const appear=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');appear.unobserve(entry.target);}
  });
},{threshold:0.2});
faders.forEach(fader=>appear.observe(fader));

// Particle Background
const canvas=document.getElementById('particle-bg');
const ctx=canvas.getContext('2d');
let particles=[];
const colors=['#58a6ff','#7ee8fa','#1f6feb'];
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
window.addEventListener('resize',resize);resize();
for(let i=0;i<70;i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.8,dy:(Math.random()-0.5)*0.8,color:colors[Math.floor(Math.random()*colors.length)]});
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1});requestAnimationFrame(animate);}
animate();

// Theme Toggle
const themeToggle=document.querySelector('.theme-toggle');
const currentTheme=localStorage.getItem('theme');
if(currentTheme) document.body.classList.add(currentTheme);
function toggleTheme(){
  document.body.classList.toggle('light-theme');
  if(document.body.classList.contains('light-theme')) localStorage.setItem('theme','light-theme');
  else localStorage.setItem('theme','dark-theme');
}

// Scroll Progress
window.addEventListener('scroll',()=>{
  const scrollTotal = document.body.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY;
  const progress = (scrollY / scrollTotal) * 100;
  document.getElementById('scroll-progress').style.width = progress+'%';
});

// Mobile Menu
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('show');
}

// Certificate Gallery (Dynamic)
const certificates = [
  {src:'cert1.jpg', title:'Java Certification', desc:'Completed advanced Java programming course.'},
  {src:'cert2.jpg', title:'IoT Specialist', desc:'Internship Certification in IoT and embedded systems projects.'},
  {src:'cert3.jpg', title:'Google Certifiction', desc:'Completed the certification on The Fundamentals of Digital Marketing'}
];

const certContainer=document.getElementById('certificates-container');
certificates.forEach(cert=>{
  const card=document.createElement('div');
  card.classList.add('certificate-card','card');
  card.innerHTML=`<img src="${cert.src}" alt="${cert.title}"><h3>${cert.title}</h3><p>${cert.desc}</p>`;
  certContainer.appendChild(card);
});

