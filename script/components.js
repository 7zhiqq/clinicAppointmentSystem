// Navbar HTML
const navbarHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
            <a href="index.html" class="d-flex align-items-center">
                <img src="img/westpoint.png" alt="WestPoint Clinic Logo" height="35" class="logo">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-lg-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 text-center mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html" data-page="index">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html" data-page="about">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="doctors.html" data-page="doctors">Doctors</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Services
                        </a>
                        <ul class="dropdown-menu text-center">
                            <li><a class="dropdown-item" href="pharmacy.html" data-page="pharmacy">Pharmacy</a></li>
                            <li><a class="dropdown-item" href="ophthamology.html" data-page="ophthamology">Ophthalmology</a></li>
                            <li><a class="dropdown-item" href="pediatrics.html" data-page="pediatrics">Pediatrics</a></li>
                            <li><a class="dropdown-item" href="endocrinology.html" data-page="endocrinology">Endocrinology</a></li>
                            <li><a class="dropdown-item" href="practitioners.html" data-page="practitioners">General Practitioners</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#faqs" data-page="faqs">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html" data-page="contact">Contact Us</a>
                    </li>
                    <li class="nav-item d-lg-none mt-3">
                        <button class="button btn w-100">Book Now</button>
                    </li>
                </ul>
            </div>

            <div class="d-none d-lg-flex">
                <button class="button btn btn-sm">Book Now</button>
            </div>
        </div>
    </nav>
`;

// Footer HTML
const footerHTML = `
    <footer class="text-center text-lg-start mt-5">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-start">
                    <a href="index.html" class="d-flex align-items-center">
                        <img src="img/westpoint.png" alt="WestPoint Clinic Logo" height="40">
                    </a>
                    <p class="text-muted small">
                        Providing trusted healthcare and pharmacy services for your complete wellness.
                    </p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-start">
                    <h6 class="fw-bold" style="color:#0523af;">Quick Links</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-muted text-decoration-none">Home</a></li>
                        <li><a href="about.html" class="text-muted text-decoration-none">About</a></li>
                        <li><a href="doctors.html" class="text-muted text-decoration-none">Doctors</a></li>
                        <li><a href="index.html#faqs" class="text-muted text-decoration-none">FAQs</a></li>
                        <li><a href="contact.html" class="text-muted text-decoration-none">Contact Us</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-12 mb-4 mb-md-0 text-start">
                    <h6 class="fw-bold" style="color:#0523af;">Contact Us</h6>
                    <p class="text-muted small mb-1">
                        <i class="bi bi-geo-alt-fill me-2"></i>5th Lacson St, Bacolod City
                    </p>
                    <p class="text-muted small mb-1">
                        <i class="bi bi-telephone-fill me-2"></i>(034) 454-1118 / (+63) 912 345 6789
                    </p>
                    <p class="text-muted small">
                        <i class="bi bi-envelope-fill me-2"></i>westpointbacolod@gmail.com
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center p-3 bg-light border-top">
            <small class="text-muted">© 2025 WestPoint Clinic. All Rights Reserved.</small>
        </div>
    </footer>
`;

// Function to get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    return page;
}

// Function to set active navigation
function setActiveNav() {
    const currentPage = getCurrentPage();
    
    // Remove all active classes
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });
    
    // Add active class to current page
    const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
        
        // If it's a dropdown item, also activate the dropdown toggle
        if (activeLink.classList.contains('dropdown-item')) {
            const dropdownToggle = activeLink.closest('.dropdown').querySelector('.dropdown-toggle');
            if (dropdownToggle) {
                dropdownToggle.classList.add('active');
            }
        }
    }
}

// Load navbar and footer
document.addEventListener('DOMContentLoaded', function() {
    // Insert navbar at the beginning of body
    const navbarContainer = document.getElementById('navbar-placeholder');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }
    
    // Insert footer at the end of body
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    // Set active navigation
    setActiveNav();
});