// ===== Floating Background Gradient Animation =====
const colors = [
  ['#0f2027','#203a43','#2c5364'],
  ['#ff4c60','#ff758f','#ff8caa'],
  ['#6a11cb','#2575fc','#6a11cb'],
  ['#ff512f','#dd2476','#ff512f']
];

let step = 0;
setInterval(() => {
  document.body.style.background = `linear-gradient(135deg, ${colors[step].join(',')})`;
  step = (step + 1) % colors.length;
}, 6000);

// ===== Scroll Reveal Animations =====
const sections = document.querySelectorAll('section, header, footer');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 1s ease-out';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Button Hover Particle Effect (Optional) =====
const buttons = document.querySelectorAll('a.button, button');

buttons.forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const x = e.offsetX;
    const y = e.offsetY;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  });
});
