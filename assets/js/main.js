let darkModeToggler = document.getElementById('dark-mode-toggle');
let darkMode = false;
let htmlTag = document.getElementById('HTMLTAG');

darkModeToggler.addEventListener('click', () => {
  darkModeToggler.innerText = darkMode ? "Dark" : "Light";
  htmlTag.classList.toggle('dark');
  darkMode = !darkMode;
});