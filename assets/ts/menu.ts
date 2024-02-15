export default function menu(){
const hamburguer = document.querySelector('.hamburguer');
hamburguer?.addEventListener('click', () => {
    hamburguer?.classList.toggle('show-menu');
    document.querySelector('.aside-menu')?.classList.toggle('sidebar-visible');
});
}
