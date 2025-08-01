document.addEventListener('DOMContentLoaded', () => {

    // Logic for the access.html page
    const unlockButton = document.getElementById('unlockButton');
    const unlockCodeInput = document.getElementById('unlockCodeInput');
    const errorMessage = document.getElementById('errorMessage');

    if (unlockButton && unlockCodeInput && errorMessage) {
        unlockButton.addEventListener('click', () => {
            const code = unlockCodeInput.value.trim().toUpperCase();

            if (code === 'KLINS') {
                // Correct code, redirect to the "Sad News" page
                window.location.href = 'sad_news.html';
            } else {
                // Incorrect code, show the error message
                errorMessage.style.display = 'block';
            }
        });
    }

    // You can add more JavaScript logic here for other pages as we build them.
    // The "if" check ensures the code only runs on the page where the elements exist.

});
document.addEventListener('DOMContentLoaded', () => {

    // ... existing script for access.html ...

    // Logic for the payment.html page
    const durationButtons = document.querySelectorAll('.btn-duration');
    const paymentAmountSpan = document.getElementById('paymentAmount');

    if (durationButtons.length > 0 && paymentAmountSpan) {
        // Define the prices for each duration
        const prices = {
            '1hour': 'Sh. 250',
            '3hours': 'Sh. 475',
            '6hours': 'Sh. 700'
        };

        // Add 'active' class to the 3-hour button by default
        const defaultButton = document.querySelector('[data-duration="3hours"]');
        if (defaultButton) {
            defaultButton.classList.add('active');
        }

        durationButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons
                durationButtons.forEach(btn => btn.classList.remove('active'));

                // Add 'active' class to the clicked button
                button.classList.add('active');

                // Update the payment amount based on the data-duration attribute
                const duration = button.dataset.duration;
                paymentAmountSpan.textContent = prices[duration];
            });
        });
    }

});
