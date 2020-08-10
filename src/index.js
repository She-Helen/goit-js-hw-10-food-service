import './styles.css';
import menu from './menu.json';
import itemTemplate from './templates/menu__item.hbs';

const themeSwitchControlRef = document.querySelector('.js-switch-input');
const menuRef = document.querySelector('.js-menu');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeSwitchControlRef.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
}

const setTheme = event => {
  if (event.target.checked) {
    themeSwitchControlRef.checked = true;
    localStorage.setItem('Theme', Theme.DARK);
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
  } else {
    themeSwitchControlRef.checked = false;
    localStorage.setItem('Theme', Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
};

themeSwitchControlRef.addEventListener('change', setTheme);

function generateMenuItems(arr) {
  const items = arr.map(item => itemTemplate(item)).join('');
  menuRef.insertAdjacentHTML('beforeend', items);
}

const startCreateMenu = () => {
  generateMenuItems(menu);
};

window.addEventListener('load', startCreateMenu);
