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

    // Contact Form Handling with Formspree
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const messageDiv = document.getElementById('form-message');
            const formData = new FormData(contactForm);
            
            // Disable submit button and show loading state
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            
            try {
                // Send data to Formspree
                const response = await fetch('https://formspree.io/f/mwvveraz', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    if (messageDiv) {
                        messageDiv.className = 'mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg';
                        messageDiv.textContent = 'Thank you! Your message has been sent successfully. We\'ll be in touch soon.';
                        messageDiv.classList.remove('hidden');
                    }
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide message after 8 seconds
                    setTimeout(() => {
                        if (messageDiv) {
                            messageDiv.classList.add('hidden');
                        }
                    }, 8000);
                } else {
                    // Error from Formspree
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error handling
                if (messageDiv) {
                    messageDiv.className = 'mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg';
                    messageDiv.textContent = 'Sorry, there was an error sending your message. Please try again or email us directly at answers@kingsystemsllc.com';
                    messageDiv.classList.remove('hidden');
                }
                
                console.error('Form submission error:', error);
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    // Let's Talk Modal Form Handling with Formspree
    const letsTalkForm = document.getElementById('contactForm');
    if (letsTalkForm) {
        letsTalkForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = letsTalkForm.querySelector('button[type="submit"]');
            const formData = new FormData(letsTalkForm);
            
            // Disable submit button and show loading state
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            
            try {
                // Send data to Formspree
                const response = await fetch('https://formspree.io/f/xaqqwpkn', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success - Show success message in modal
                    alert('Thank you! Your message has been sent successfully. We\'ll be in touch soon.');
                    
                    // Reset form
                    letsTalkForm.reset();
                    
                    // Close modal if function exists
                    if (typeof closeContactModal === 'function') {
                        closeContactModal();
                    }
                } else {
                    // Error from Formspree
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error handling
                alert('Sorry, there was an error sending your message. Please try again or email us directly at answers@kingsystemsllc.com');
                console.error('Form submission error:', error);
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    // Law Firm Assessment Form Handling with Formspree
    const lawAssessmentForm = document.getElementById('law-assessment-form');
    if (lawAssessmentForm) {
        lawAssessmentForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = lawAssessmentForm.querySelector('button[type="submit"]');
            const formData = new FormData(lawAssessmentForm);
            
            // Disable submit button and show loading state
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            
            try {
                // Send data to Formspree
                const response = await fetch('https://formspree.io/f/xdaanwjo', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success - Replace form with success message
                    lawAssessmentForm.innerHTML = `
                        <div class="text-center py-12">
                            <div class="bg-green-100 text-green-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-check text-4xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-900">Assessment Request Received!</h3>
                            <p class="text-gray-700 mb-6">
                                Thank you for your interest in King Systems. We'll contact you within 1 business day to schedule your complimentary technology assessment.
                            </p>
                            <p class="text-gray-600">
                                Need immediate assistance? Call us at <a href="tel:1-855-285-2854" class="text-blue-900 font-semibold hover:text-amber-600">1-855-AVKINGS</a>
                            </p>
                        </div>
                    `;
                    
                    // Scroll to success message
                    lawAssessmentForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    // Error from Formspree
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error handling
                alert('Sorry, there was an error sending your assessment request. Please try again or call us directly at 1-855-AVKINGS (1-855-285-2854)');
                console.error('Form submission error:', error);
                
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
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

// OneFirefly Lead Concierge Chat Widget
window.lhnJsSdkInit = function () {
    lhnJsSdk.setup = {
        application_id: "6dd768dd-9278-4f7b-b1ac-3b18294f97fd",
        application_secret: "rkuhw3gvzgrrykjn0fug//hnm3ud6uwwauyamr0b4dapmwvork"
    };
    lhnJsSdk.controls = [{
        type: "hoc",
        id: "9f661b59-1a27-4f3b-836a-9659d2f99833"
    }];
    lhnJsSdk.options = {
        custom1: "1094172000000141749"
    };
};

(function (d, s) {
    var newjs, lhnjs = d.getElementsByTagName(s)[0];
    newjs = d.createElement(s);
    newjs.src = "https://developer.livehelpnow.net/js/sdk/lhn-jssdk-current.min.js";
    lhnjs.parentNode.insertBefore(newjs, lhnjs);
}(document, "script"));