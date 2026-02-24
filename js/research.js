document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-count]");

    counters.forEach(counter => {
        const target = +counter.dataset.count;
        let current = 0;

        const increment = target / 100; // smooth 100 steps
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = Math.ceil(current);
            }
        }, 20);
    });
});


// Scroll right button functionality
const scrollRightBtn = document.getElementById('scrollRightBtn');
const materialGrid = document.getElementById('materialGrid');

scrollRightBtn.addEventListener('click', () => {
    materialGrid.scrollBy({
        left: 300,  // scroll approx one card width
        behavior: 'smooth'
    });
});



