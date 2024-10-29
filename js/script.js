// const toggle = document.querySelector('.toggle')
// const navigation = document.querySelector('.navigation')

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active')
//   navigation.classList.toggle('active')
// })

const navbarUl = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
    navbarUl.style.display = navbarUl.style.display === 'flex' ? 'none' : 'flex';
  });