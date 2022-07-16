function aoRolar() {
  if (scrollY > 0) {
    navegacao.classList.add("scroll");
  } else {
    navegacao.classList.remove("scroll");
  }
}
function openMenu() {
  principal.classList.add("menu-expanded");
}
function closeMenu() {
  principal.classList.remove("menu-expanded");
}
