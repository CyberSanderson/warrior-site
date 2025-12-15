document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. MOBILE MENU LOGIC (Runs on all pages)
       ========================================= */
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Only run this if the menu actually exists on the page
    if (menu && navLinks) {
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active'); // Optional: For button animation
            navLinks.classList.toggle('active'); // Shows/Hides the links
        });
    }

    /* =========================================
       2. EMAIL FORM LOGIC (Runs only on Home)
       ========================================= */
    const emailForm = document.getElementById('emailForm');

    // Only run this if the form exists on the current page
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the page from reloading
            
            const emailInput = document.getElementById('email');
            const statusMsg = document.getElementById('statusMessage');
            
            if(emailInput.value) {
                // Here is where we will eventually send data to a backend
                console.log("Email captured:", emailInput.value);
                
                // Visual feedback for the user
                statusMsg.style.color = "#16a34a"; // Green color
                statusMsg.innerHTML = "Thanks! We've added <strong>" + emailInput.value + "</strong> to the list.";
                emailInput.value = ""; // Clear the input
            }
        });
    }

    /* =========================================
       3. PRODUCT SIZE SELECTOR
       ========================================= */
    const sizeBtns = document.querySelectorAll('.size-btn');

    if (sizeBtns.length > 0) {
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Remove 'active' class from ALL buttons
                sizeBtns.forEach(b => b.classList.remove('active'));
                
                // 2. Add 'active' class to THIS button
                btn.classList.add('active');
            });
        });
    }

});