
// Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!firstName || !lastName || !email || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Submit form to server
    alert('Form submitted successfully!');
    this.reset();
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const hiddenProjects = document.querySelectorAll('.projects-gallery__hidden');
    let isExpanded = false;

    viewMoreBtn.addEventListener('click', function() {
        hiddenProjects.forEach(project => {
            project.style.display = isExpanded ? 'none' : 'block';
            project.style.opacity = isExpanded ? '0' : '1';
            project.style.transform = isExpanded ? 'translateY(20px)' : 'translateY(0)';
        });

        viewMoreBtn.textContent = isExpanded ? 'View More Projects' : 'Show Less';
        isExpanded = !isExpanded;
    });
});