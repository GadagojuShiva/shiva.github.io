const helmIcon = document.getElementById('helmIcon');
let rotateValue = 0;

helmIcon.addEventListener('click', () => {
    rotateValue += 180;
    helmIcon.style.transform = `rotate(${rotateValue}deg)`;

    // Get the current scroll position
    const currentPosition = window.scrollY;

    // Determine the destination based on the scroll position
    const destination = currentPosition === 0 ? document.body.scrollHeight : 0;

    // Perform a smooth scroll to the destination
    window.scrollTo({
        top: destination,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    rotateValue += 3;
    helmIcon.style.transform = `rotate(${rotateValue}deg)`;
});