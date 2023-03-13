const mobileMenuButton = document.querySelector('.mobile-nav-button');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const bodyE1 = document.body;



mobileMenuButton.addEventListener('click', function(){
    mobileMenuButton.classList.toggle('mobile-nav-button--active');
    mobileMenu.classList.toggle('mobile-menu--active');
    overlay.classList.toggle('overlay--active');
    bodyE1.classList.toggle('noscroll');
})

const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list li a')

console.log(mobileMenuLinks);

mobileMenuLinks.forEach(function(item){

    item.addEventListener('click', function(){
        mobileMenuButton.classList.remove('mobile-nav-button--active');
        mobileMenu.classList.remove('mobile-menu--active');
        overlay.classList.remove('overlay--active');
        bodyE1.classList.remove('noscroll');
    })
});

// mobileMenu.addEventListener('click', function(){
//     mobileMenuButton.classList.remove('mobile-nav-button--active');
//     mobileMenu.classList.remove('mobile-menu--active');
//     overlay.classList.remove('overlay--active');
//     bodyE1.classList.remove('noscroll');
// })

window.addEventListener('resize', function(){
    mobileMenuButton.classList.remove('mobile-nav-button--active');
    mobileMenu.classList.remove('mobile-menu--active');
    overlay.classList.remove('overlay--active');
    bodyE1.classList.remove('noscroll');
})