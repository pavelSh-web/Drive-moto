// исправление бага slideToggle
window.addEventListener("orientationchange", function () {
    if (window.orientation == 0) {
        document.querySelectorAll('.footer-list').forEach(item => {
            item.style.display = 'none';
        });
    } else if (window.orientation == 90) {
        document.querySelectorAll('.footer-list').forEach(item => {
            item.style.display = 'block';
        });
    }

}, false);

window.addEventListener("orientationchange", function () {
    console.log(document.body.clientWidth);
    if (window.orientation == 0 && screen.width <= 598) {
        document.querySelectorAll('[data-view]').forEach(item => {
            console.log(item);
            document.querySelector('.views-btn_grid').click();
            item.setAttribute('data-view', 'grid');
        });
    }
}, false);