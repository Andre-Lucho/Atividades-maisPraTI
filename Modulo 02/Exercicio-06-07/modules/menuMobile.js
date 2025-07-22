export default function menuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['touchstart', 'click'];

  events.forEach((tipoEvento) =>
    menuBtn.addEventListener(tipoEvento, (event) => {
      event.preventDefault();
      menuBtn.classList.toggle('actived');
      menuList.classList.toggle('actived');
    }),
  );
}
