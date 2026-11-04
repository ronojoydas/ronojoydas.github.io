const config = window.PORTFOLIO_CONFIG || {};
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
function setLink(selector, url, prefix = '') {
  const el = document.querySelector(selector);
  if (!el) return false;
  if (url && /^https?:\/\//i.test(url)) {
    el.href = url;
    return true;
  }
  if (prefix && url && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url)) {
    el.href = `mailto:${url}`;
    return true;
  }
  el.hidden = true;
  return false;
}
setLink('.email-link', config.email, 'email');
setLink('.linkedin-link', config.linkedin);
setLink('.github-link', config.github);
setLink('.featured-project .repo-link', config.interviewRepo);
setLink('.reverse-project .repo-link', config.analyticsRepo);
const hasContact = Boolean(config.email || config.linkedin || config.github);
if (hasContact) document.querySelector('#contact-note').hidden = true;
