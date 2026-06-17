document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between hamburger and close
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '✕';
        } else {
            mobileMenuBtn.innerHTML = '☰';
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '☰';
        });
    });

    // 2. Set Current Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Frontend Form Submission Handler (Placeholder)
    const form = document.getElementById('subscribe-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            // NOTE: Remove e.preventDefault() when you connect your actual email service, 
            // unless you are handling the submission via fetch/AJAX.
            
            const firstName = form.querySelector('input[name="first_name"]').value;
            
            formMessage.style.color = '#FDFBF7';
            formMessage.textContent = `Thank you, ${firstName}! You have been added to the list.`;
            
            form.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
});