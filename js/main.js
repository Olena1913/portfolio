const btnDarkMode = document.querySelector(".dark-mode-btn");

//1.перевірка темної теми на рівні системних налаштувань
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark ");
}

//2.перевірка темної теми in localStorage
if(localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}
//якщо змінюються системні налаштування, змінюєм тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
  const newColorScheme = event.matches ? "dark" : 'light';
  alert('Change!!!');

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark ");
    localStorage.setItem('darkMode', 'dark');
  }else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    localStorage.setItem('darkMode', 'light');
  }
})
btnDarkMode.onclick = function() {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle('dark');
  //вмикання нічного режиму по кнопці
  if(isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
}