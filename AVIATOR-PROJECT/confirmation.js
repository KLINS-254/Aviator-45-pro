document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const price = urlParams.get('price');
    
    if (price) {
        document.getElementById('payment-amount-display').textContent = price;
    }
});
