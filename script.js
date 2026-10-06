// Emil Medina Portfolio - Interactive JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // 2. Navbar Scroll shadow & Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        let current = '';

        if (window.scrollY > 30) {
            navbar.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
    });
});

// 3. Copy to Clipboard Function with Toast Notification
function copyContact(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage || 'Copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar:', err);
        showToast('No se pudo copiar');
    });
}

// 4. Toast Notification Manager
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
}

// 5. Contact Form Interactive Handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const feedback = document.getElementById('form-feedback');
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name').value;

    if (feedback && form) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Gracias, ${name}! Tu mensaje ha sido enviado correctamente. Emil te responderá pronto.`;
        feedback.classList.remove('hidden');

        form.reset();

        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 6000);
    }
}
