document.addEventListener('DOMContentLoaded', () => {
    // Select all the site cards
    const siteCards = document.querySelectorAll('.site-card');

    siteCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the name of the site from the card's class
            const siteName = card.classList[1];
            
            // Redirect to a new page only if the Aviator card is clicked
            if (siteName === 'aviator') {
                window.location.href = 'access.html';
            } else {
                // Keep the old alert for other cards, if they existed
                alert(`You clicked the ${siteName} card.`);
            }
        });
    });
});
