function scrolltop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function smoothScroll (id) {
document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
}