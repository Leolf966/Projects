const switchLinks = document.querySelectorAll('.switch-img-link');
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.switch-img'); 
function updateActiveImage() {
    const activeImage = localStorage.getItem('activeImage');
    switchLinks.forEach(link => {
        const imgSrc = link.querySelector('img').getAttribute('src');
        if (imgSrc === activeImage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function updateActiveDot(index) {
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
    localStorage.setItem('activeDot', index);
}

function initializeActiveDot() {
    const activeIndex = localStorage.getItem('activeDot');
    if (activeIndex !== null) {
        updateActiveDot(activeIndex);
        updateActiveImage();
        images[activeIndex].parentElement.classList.add('active'); 
    }
}

function updateImage(index) {
    switchLinks.forEach(link => link.classList.remove('active'));
    switchLinks[index].classList.add('active');
    const imgSrc = switchLinks[index].querySelector('img').getAttribute('src');
    localStorage.setItem('activeImage', imgSrc);
}


switchLinks.forEach((link, index) => {
    link.addEventListener('click', function() {
        updateActiveImage();
        updateActiveDot(index);
        updateImage(index);
    });
});


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateActiveDot(index);
        updateImage(index); 
        switchPage(index);
    });
});

initializeActiveDot();

function switchPage(index) {
    const pages = [
        '../blue-kettle/index.html',
        '../red-kettle/red-index.html',
        '../pink-kettle/pink-index.html',
        '../beige-kettle/beige-index.html'
    ];

    window.location.href = pages[index];
}

const productsLink = document.querySelector('.nav-link');
const modal = document.getElementById('productModal');

productsLink.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(event) {

    if (modal.style.display === 'block' && !modal.contains(event.target) && event.target !== productsLink) {
        modal.style.display = 'none';
    }
});

function toggleMenu() {
    var menu = document.getElementById("menu-items");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}