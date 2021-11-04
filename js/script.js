window.onload = () => {
  //animation scroll
  AOS.init();
}

// sticky header
window.addEventListener('scroll', () => {
  if (window.scrollY > 200)
      document.querySelector('.header').classList.add('sticky');
  else document.querySelector('.header').classList.remove('sticky');  

  //scroll button
  const mybutton = document.querySelector('#to-the-top');
  if (window.scrollY > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
})

//menu tab
document.querySelectorAll('.menu-tab-item')
.forEach(item => item.addEventListener('click', () => {
  if (item.classList.contains('active')) return;
  const target = item.getAttribute('data-target');
  document.querySelector('.menu-tab-item.active').classList.remove('active');
  item.classList.add('active');
  //remove active trước đó
  const section = document.querySelector('.menu-section');
  section.querySelector('.menu-tab-content.active').classList.remove('active');

  //thêm active theo id của target
  section.querySelector(target).classList.add('active');
}));

// scroll to top
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'})
}