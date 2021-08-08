window.onload = (event) => {
  console.log('page is fully loaded');
  const toggler = document.querySelector('.nav-toggler');
  const nav = document.querySelector('nav ul');
  const togglerImg = document.querySelector('.nav-toggler img');

  toggler.addEventListener('click', () => {
    if (nav.classList.contains("opacity-1")) {
      togglerImg.src = "./images/icon-hamburger.svg";
      nav.classList.toggle("opacity-1");
      setTimeout(() => {
        nav.classList.toggle("d-none");
      }, 700)
    } else {
      togglerImg.src = "./images/icon-close.svg";
      nav.classList.toggle("d-none");
      setTimeout(() => {
        nav.classList.toggle("opacity-1");
      }, 70)
    }
    // nav.classList.toggle("opacity-1");
  })
};