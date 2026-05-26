(function(){
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) nav.classList.remove('open');
    });
  }

  // --- Floating labels: add has-value class on input/change ---
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    const input = group.querySelector('.form-input, .form-select, .form-textarea');
    if (!input) return;

    function checkValue() {
      if (input.value.trim() !== '') {
        group.classList.add('has-value');
      } else {
        group.classList.remove('has-value');
      }
    }

    input.addEventListener('input', checkValue);
    input.addEventListener('change', checkValue);
    checkValue();
  });

  // --- Custom cursor: purple dot + ring + trail ---
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (dot && ring) {
    const trailHistory = [];
    const MAX_TRAIL = 12;

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;

      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      ring.style.left = x + 'px';
      ring.style.top = y + 'px';

      trailHistory.push({ x, y, time: Date.now() });
      if (trailHistory.length > MAX_TRAIL) trailHistory.shift();
    });

    function renderTrail() {
      const now = Date.now();
      const trails = document.querySelectorAll('.cursor-trail');
      trails.forEach(t => t.remove());

      trailHistory.forEach((p, i) => {
        const el = document.createElement('div');
        el.className = 'cursor-trail';
        const age = (now - p.time) / 800;
        if (age > 1) return;
        const scale = 1 - age;
        el.style.left = p.x + 'px';
        el.style.top = p.y + 'px';
        el.style.width = (2 + scale * 4) + 'px';
        el.style.height = (2 + scale * 4) + 'px';
        el.style.background = `rgba(192, 132, 252, ${0.3 * scale})`;
        el.style.boxShadow = `0 0 ${8 * scale}px rgba(192, 132, 252, ${0.4 * scale})`;
        document.body.appendChild(el);
      });
      requestAnimationFrame(renderTrail);
    }
    requestAnimationFrame(renderTrail);

    const hoverTargets = document.querySelectorAll('a, button, .btn, .course-card');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  // --- Purple blurred orb following cursor ---
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const orb = document.createElement('div');
    orb.style.cssText = 'position:fixed;width:300px;height:300px;border-radius:50%;background:rgba(124,58,237,0.08);filter:blur(60px);pointer-events:none;z-index:1;top:0;left:0;will-change:transform;';
    document.body.appendChild(orb);
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    window.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; }, { passive: true });
    function lerp(a, b, t) { return a + (b - a) * t; }
    (function tick() {
      cx = lerp(cx, mx, 0.08);
      cy = lerp(cy, my, 0.08);
      orb.style.transform = 'translate(calc(' + cx + 'px - 50%), calc(' + cy + 'px - 50%))';
      requestAnimationFrame(tick);
    })();
  })();

  // --- Hero: Vanta.js NET full-screen background ---
  const heroEl = document.getElementById('hero');
  if (heroEl && window.VANTA) {
    const isMobile = window.innerWidth <= 768;
    VANTA.NET({
      el: heroEl,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x7c3aed,
      backgroundColor: 0x080810,
      points: isMobile ? 8 : 14,
      maxDistance: isMobile ? 25 : 30,
      spacing: isMobile ? 20 : 18,
      showDots: false
    });
  }

  // --- Contact: form validation + WhatsApp/Email ---
  const waBtn = document.getElementById('whatsapp-btn');
  const emailBtn = document.getElementById('email-btn');
  const form = document.getElementById('contact-form');
  const errorMsg = document.getElementById('form-error');

  function getFormData(){
    const name = document.getElementById('name').value || '';
    const phone = document.getElementById('phone').value || '';
    const course = document.getElementById('course').value || '';
    const message = document.getElementById('message').value || '';
    return {name, phone, course, message};
  }

  function validate() {
    const { name, course } = getFormData();
    if (!name.trim() || !course) {
      if (errorMsg) errorMsg.classList.add('visible');
      return false;
    }
    if (errorMsg) errorMsg.classList.remove('visible');
    return true;
  }

  function encode(text){
    return encodeURIComponent(text).replace(/%20/g,'+');
  }

  waBtn && waBtn.addEventListener('click', ()=>{
    if (!validate()) return;
    const {name, phone, course, message} = getFormData();
    const waPhone = form.dataset.waPhone || '96178957416';
    const text = `Hello ${name}, I need to enroll in ${course}${message ? '. ' + message : ''}`;
    const url = `https://wa.me/${waPhone}?text=${encode(text)}`;
    window.open(url, '_blank');
  });

  emailBtn && emailBtn.addEventListener('click', ()=>{
    if (!validate()) return;
    const {name, phone, course, message} = getFormData();
    const to = form.dataset.email || 'ali.shokor.dev@gmail.com';
    const subject = encode(`Course inquiry: ${course}`);
    const body = encode(`Hello ${name}, I need to enroll in ${course}.${message ? '\n\n' + message : ''}`);
    const url = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = url;
  });

  // --- Scroll to top ---
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Testimonials: carousel navigation ---
  const track = document.getElementById('tTrack');
  const prev = document.getElementById('tPrev');
  const next = document.getElementById('tNext');

  if (track && prev && next) {
    const isMobile = () => window.innerWidth <= 600;

    next.addEventListener('click', () => {
      if (isMobile()) {
        track.scrollBy({ left: track.clientWidth * 0.85, behavior: 'smooth' });
      } else {
        const cards = track.querySelectorAll('.testimonial-card');
        const first = cards[0];
        if (first) track.appendChild(first);
      }
    });

    prev.addEventListener('click', () => {
      if (isMobile()) {
        track.scrollBy({ left: -track.clientWidth * 0.85, behavior: 'smooth' });
      } else {
        const cards = track.querySelectorAll('.testimonial-card');
        const last = cards[cards.length - 1];
        if (last) track.prepend(last);
      }
    });
  }

})();
