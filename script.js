let seta = document.getElementById('seta')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    seta.style.left = value * 0.25 + 'px';
})