document.addEventListener('DOMContentLoaded', () => {
    const unlockButton = document.getElementById('unlock-button');
    const accessCodeInput = document.getElementById('access-code-input');
    const errorPopup = document.getElementById('error-popup');
    const closePopupBtn = errorPopup.querySelector('.close-btn');

    const SECRET_CODE = "1234";

    function showErrorPopup(message) {
        errorPopup.querySelector('.error-text').textContent = message;
        errorPopup.classList.add('show');
        setTimeout(() => {
            errorPopup.classList.remove('show');
        }, 2300); // 2.3 seconds
    }

    closePopupBtn.addEventListener('click', () => {
        errorPopup.classList.remove('show');
    });

    unlockButton.addEventListener('click', () => {
        const enteredCode = accessCodeInput.value;

        if (enteredCode === "") {
            showErrorPopup("You must enter an Unlock Code!");
            return;
        }

        unlockButton.textContent = "Checking Code...";
        unlockButton.disabled = true;

        setTimeout(() => {
            if (enteredCode === SECRET_CODE) {
                window.location.href = 'predictor.html';
            } else {
                showErrorPopup("Please enter a valid code.");
                unlockButton.textContent = "Unlock Odds";
                unlockButton.disabled = false;
            }
        }, 2000);
    });
});
