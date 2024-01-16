// Show Back to Top button when scrolling
window.onscroll = function () {
    showBackToTopButton();
};

// Function to show/hide Back to Top button
function showBackToTopButton() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

// Function to scroll to the top
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
const preElements = document.querySelectorAll('pre');
preElements.forEach(pre => {
    const copyButton = pre.querySelector('button');
    const copyFeedback = pre.querySelector('#copy-feedback');

    copyButton.addEventListener('click', () => {
        copyFeedback.style.opacity = 1;
        setTimeout(() => {
            copyFeedback.style.opacity = 0;
        }, 1500); // Hide feedback after 1.5 seconds
    });
});
