let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function()) {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
}
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var footer = document.querySelector('footer');

    // Adjust this value based on when you want the footer to appear
    var showFooterThreshold = 500;

    if (scrollPosition > showFooterThreshold) {
        footer.classList.add('footer');
    } else {
        footer.classList.remove('footer');
    }
});
