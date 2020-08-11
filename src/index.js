import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/menu__item.hbs';

const themeSwitchControlRef = document.querySelector('.js-switch-input');
const menuRef = document.querySelector('.js-menu');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const reloadPage = function () {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    themeSwitchControlRef.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
};

reloadPage();

const updateThemeInStorage = function (str) {
  localStorage.setItem('Theme', str);
};
const updateBodyClassTheme = function (oldTheme, newTheme) {
  document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
};

const setTheme = event => {
  if (event.target.checked) {
    updateThemeInStorage(Theme.DARK);
    updateBodyClassTheme(Theme.LIGHT, Theme.DARK);
  } else {
    updateThemeInStorage(Theme.LIGHT);
    updateBodyClassTheme(Theme.DARK, Theme.LIGHT);
  }
};

themeSwitchControlRef.addEventListener('change', setTheme);

function generateMenuItems(arr) {
  const items = arr.map(item => itemTemplate(item));
  menuRef.insertAdjacentHTML('beforeend', items.join(''));
}

const startCreateMenu = () => {
  generateMenuItems(menu);
};

window.addEventListener('load', startCreateMenu);
