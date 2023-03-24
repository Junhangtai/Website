
function toggleNav(e){
    const links = document.querySelector(".mainNav");
    console.log('click');
    links.classList.toggle('showNav');

}
/// grab the element by id 
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', toggleNav);