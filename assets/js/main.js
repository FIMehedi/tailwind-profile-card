const htmlTag = document.getElementById('HTMLTAG');
const darkToggler = document.getElementById('darkToggler');

darkToggler.addEventListener('click', () => {
  htmlTag.classList.toggle('dark');
  darkToggler.classList.toggle('bxs-toggle-right');
});