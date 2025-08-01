document.addEventListener('DOMContentLoaded', () => {
    const durationButtons = document.querySelectorAll('.duration-btn');
    const paymentAmount = document.querySelector('.payment-amount');

    durationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            durationButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Update the displayed price
            const price = button.getAttribute('data-price');
            paymentAmount.textContent = `Sh. ${price}`;
        });
    });
});
