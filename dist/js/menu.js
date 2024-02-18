// Color Mode Config
if(localStorage.getItem('class-mode')){
    document.querySelector('html').classList.add('dark-mode');
}

const colorMode = document.querySelector('.menu-dark-mode');
colorMode.children[0].addEventListener('click', () => {
    document.querySelector('html').classList.add('dark-mode');
    localStorage.setItem('class-mode', 'dark-mode');
});

colorMode.children[1].addEventListener('click', () => {
    document.querySelector('html').classList.remove('dark-mode');
    localStorage.removeItem('class-mode');
});

// Menu Config
const hamburguer = document.querySelector('.hamburguer');
hamburguer?.addEventListener('click', () => {
    hamburguer?.classList.toggle('show-menu');
    document.querySelector('.aside-menu')?.classList.toggle('sidebar-visible');
});