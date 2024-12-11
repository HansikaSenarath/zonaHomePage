function toggleNavbar() {
  const navbarMobile = document.getElementById('navbar-mobile');
  navbarMobile.classList.toggle('active');
}


const numberItems = document.querySelectorAll('.tech-land-number-item');
let activeIndex = 0;

const activeIndices = [0, 1]; 

function cycleActiveState() {
  numberItems.forEach(item => item.classList.remove('active'));


  const currentActiveIndex = activeIndices[activeIndex];
  numberItems[currentActiveIndex].classList.add('active');

  activeIndex = (activeIndex + 1) % activeIndices.length;
}

setInterval(cycleActiveState, 2000);


