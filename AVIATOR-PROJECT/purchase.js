document.addEventListener('DOMContentLoaded', () => {
    const durationButtons = document.querySelectorAll('.duration-btn');
    const paymentAmountDisplay = document.querySelector('.payment-amount');
    const purchaseButton = document.querySelector('.purchase-btn');

    // This part handles changing the price when a duration button is clicked
    durationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons to reset their style
            durationButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button to highlight it
            button.classList.add('active');

            // Get the price from the button's data-price attribute
            const newPrice = button.getAttribute('data-price');
            // Update the displayed price
            paymentAmountDisplay.textContent = `Sh. ${newPrice}`;
        });
    });

    // This part handles redirecting to the confirmation page when the "Purchase Now" button is clicked
    purchaseButton.addEventListener('click', () => {
        // Change the current page to confirmation.html
        window.location.href = 'confirmation.html';
    });
});
