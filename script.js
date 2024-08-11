document.addEventListener('DOMContentLoaded', function() {
    // Target the element
    const riseUpElement = document.querySelector('.rise-up');

    // Set up the observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class when the element is in view
                riseUpElement.classList.add('active');
            } else {
                // Optionally, remove the 'active' class when the element is out of view
                riseUpElement.classList.remove('active');
            }
        });
    });

    // Observe the rise-up element
    observer.observe(riseUpElement);
});

