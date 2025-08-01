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
document.addEventListener('DOMContentLoaded', () => {

    // Logic for the access.html page
    const unlockButton = document.getElementById('unlockButton');
    const unlockCodeInput = document.getElementById('unlockCodeInput');
    const errorMessage = document.getElementById('errorMessage');

    if (unlockButton && unlockCodeInput && errorMessage) {
        unlockButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the form from submitting
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

        // Add 'active' class to the 3-hour button by default and set its price
        const defaultButton = document.querySelector('[data-duration="3hours"]');
        if (defaultButton) {
            defaultButton.classList.add('active');
            paymentAmountSpan.textContent = prices['3hours'];
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

    // Logic for the confirmation.html page
    const generateCodeBtn = document.getElementById('generateCodeBtn');
    const mpesaCodeInput = document.getElementById('mpesaCodeInput');
    const mpesaError = document.getElementById('mpesaError');

    if (generateCodeBtn && mpesaCodeInput && mpesaError) {
        generateCodeBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the form from submitting
            const originalText = generateCodeBtn.textContent;

            // Change button text and simulate a check
            generateCodeBtn.textContent = 'checking the code...';
            generateCodeBtn.disabled = true; // Disable button to prevent multiple clicks

            // Simulating a network request or validation check
            setTimeout(() => {
                // Revert button text and state
                generateCodeBtn.textContent = originalText;
                generateCodeBtn.disabled = false;

                // Show the error message as per the instruction
                mpesaError.style.display = 'block';

                // NOTE: In a real application, you would send the mpesaCodeInput value
                // to a server here for validation before showing a success or failure message.

            }, 2000); // 2-second delay
        });
    }

});
