// ===== Simple FOMO counter & interactions =====
document.addEventListener('DOMContentLoaded', () => {
  // spots counter: decreases slightly to create urgency (client-side)
  const spotsEl = document.getElementById('spots');
  let spots = parseInt(spotsEl.textContent,10) || 3;

  // reduce once per page load (but not below 1)
  spots = Math.max(1, spots - 1);
  spotsEl.textContent = spots;

  // clicking CTA scroll to contact
  document.querySelectorAll('.btn.primary, #fomo-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // if the button is the banner CTA, scroll to contact
      const href = e.currentTarget.getAttribute('href');
      if(href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      } else {
        // fallback: scroll to contact
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple contact form behaviour (no server) -> show nice confirmation and clear
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value || 'Friend';
    // show a nice temporary modal / toast
    const toast = document.createElement('div');
    toast.textContent = `Thanks ${name}! Message received. I will contact you soon.`;
    toast.style = 'position:fixed;right:20px;bottom:20px;background:#111;padding:14px 18px;border-radius:10px;border:1px solid rgba(255,255,255,0.04);box-shadow:0 14px 40px rgba(0,0,0,0.6);color:#fff;z-index:2000;font-weight:700;';
    document.body.appendChild(toast);
    setTimeout(()=> toast.remove(), 4200);
    form.reset();
  });

  // simple tape pause on hover
  const tape = document.getElementById('tape');
  tape.addEventListener('mouseenter', () => tape.style.animationPlayState = 'paused');
  tape.addEventListener('mouseleave', () => tape.style.animationPlayState = 'running');

  // small entrance animation for hero headline
  const headline = document.querySelector('.headline');
  if(headline) headline.style.opacity = 0;
  setTimeout(()=> { if(headline){ headline.style.transition = 'opacity .9s ease, transform .9s ease'; headline.style.opacity = 1; headline.style.transform = 'translateY(0)'; } }, 250);
});
