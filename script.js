// This file can be used for interactive features later.
// For now, it's just a placeholder.

document.addEventListener('DOMContentLoaded', () => {
    // Select all the site cards
    const siteCards = document.querySelectorAll('.site-card');

    siteCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the name of the site from the card's class
            const siteName = card.classList[1];
            
            // For now, we'll just log which site was clicked.
            // You could add a pop-up or redirect the user here.
            console.log(`The '${siteName}' site was clicked!`);

            // Example of a simple alert
            alert(`You clicked the ${siteName} card. This would lead to the prediction page.`);
        });
    });
});
