// King Systems - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Display success message
            const messageDiv = document.getElementById('form-message');
            if (messageDiv) {
                messageDiv.className = 'message-success fade-in';
                messageDiv.textContent = 'Thank you! Your message has been sent. We\'ll be in touch soon.';
                messageDiv.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    messageDiv.classList.add('hidden');
                }, 5000);
            }
            
            // In a real implementation, you would send this data to a server
            console.log('Form submitted:', data);
        });
    }

    // Navbar Scroll Effect
    let lastScroll = 0;
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (navbar) {
            if (currentScroll > 100) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        }
        
        lastScroll = currentScroll;
    });

    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.card-hover, .bg-white.p-8, section > div').forEach(el => {
        observer.observe(el);
    });

    // Add loading state to buttons
    document.querySelectorAll('button[type="submit"]').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.form && !this.form.checkValidity()) {
                return;
            }
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            this.disabled = true;
            
            // Re-enable after form submission
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Logo slider pause on hover (additional support)
    const logoTracks = document.querySelectorAll('.logo-track, .client-track');
    logoTracks.forEach(track => {
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    });

    // External link handling
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ========================================
    // FLOATING CHAT BUTTON & CONTACT MODAL
    // ========================================
    const chatButton = document.getElementById('chatButton');
    const contactModal = document.getElementById('contactModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');

    // Auto-open modal after 10 seconds (configurable)
    let autoOpenTimer = null;
    let modalHasBeenOpened = false;
    
    function startAutoOpenTimer() {
        // Only auto-open once per session
        if (!modalHasBeenOpened && !sessionStorage.getItem('chatModalShown')) {
            autoOpenTimer = setTimeout(() => {
                openContactModal();
                sessionStorage.setItem('chatModalShown', 'true');
            }, 10000); // 10 seconds - adjust this number as needed
        }
    }
    
    // Start the timer when page loads
    startAutoOpenTimer();

    // Function to open modal
    function openContactModal() {
        if (contactModal && modalContent) {
            modalHasBeenOpened = true;
            contactModal.classList.remove('hidden');
            contactModal.classList.add('flex');
            
            // Animate modal in
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
            
            // Clear the auto-open timer if it exists
            if (autoOpenTimer) {
                clearTimeout(autoOpenTimer);
            }
        }
    }

    // Open modal when chat button is clicked
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            openContactModal();
        });
    }

    // Close modal function
    function closeContactModal() {
        if (modalContent && contactModal) {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                contactModal.classList.add('hidden');
                contactModal.classList.remove('flex');
            }, 300);
        }
    }

    // Close modal when X button is clicked
    if (closeModal) {
        closeModal.addEventListener('click', closeContactModal);
    }

    // Close modal when clicking outside
    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal && !contactModal.classList.contains('hidden')) {
            closeContactModal();
        }
    });

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Log form data (in production, send to backend/email service)
            console.log('Contact Form Submitted:', data);
            
            // Show success message
            alert('Thank you! Your message has been received. Our team will contact you shortly.');
            
            // Reset form and close modal
            contactForm.reset();
            closeContactModal();
            
            // In production, you would integrate with:
            // - Formspree: https://formspree.io/
            // - EmailJS: https://www.emailjs.com/
            // - Your own backend API
            // - HubSpot Forms API
            // - Mailchimp
            // - OneFirefly (your current provider)
        });
    }

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Print friendly
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Performance: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log page views (for analytics integration)
console.log('King Systems - Page loaded:', window.location.pathname);