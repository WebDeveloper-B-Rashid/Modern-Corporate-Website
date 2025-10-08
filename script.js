  // Mobile Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            
            mobileMenuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                
                // Change icon
                if (navMenu.classList.contains('active')) {
                    mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            // Close mobile menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        });