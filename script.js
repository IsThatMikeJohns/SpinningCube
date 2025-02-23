const cube = document.querySelector('.cube');

// Toggle animation on click
cube.addEventListener('click', () => {
    if (cube.style.animationPlayState === 'paused') {
        cube.style.animationPlayState = 'running';
    } else {
        cube.style.animationPlayState = 'paused';
    }
});
