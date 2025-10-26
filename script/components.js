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
                        <button class="button btn w-100" id="bookNowBtnMobile">Book Now</button>
                    </li>
                </ul>
            </div>
            
            <div class="d-none d-lg-flex">
                <button class="button btn btn-sm" id="bookNowBtn">Book Now</button>
            </div>
        </div>
    </nav>
`;

// Booking Modal HTML
const bookingModalHTML = `
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold" id="bookingModalLabel">
                        <i class="bi bi-calendar-heart me-2"></i>Book an Appointment
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <!-- Booking Form -->
                    <form id="bookingForm">
                        <div class="row">
                            <!-- Full Name -->
                            <div class="col-md-6">
                                <div class="form-floating-custom">
                                    <input type="text" id="fullName" name="fullName" placeholder=" " required>
                                    <label for="fullName">Full Name</label>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="col-md-6">
                                <div class="form-floating-custom">
                                    <input type="email" id="email" name="email" placeholder=" " required>
                                    <label for="email">Email Address</label>
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="col-md-6">
                                <div class="form-floating-custom">
                                    <input type="tel" id="phone" name="phone" placeholder=" " required>
                                    <label for="phone">Phone Number</label>
                                </div>
                            </div>

                            <!-- Appointment Date -->
                            <div class="col-md-6">
                                <div class="form-floating-custom">
                                    <input type="date" id="appointmentDate" name="appointmentDate" placeholder=" " required>
                                    <label for="appointmentDate">Preferred Date</label>
                                </div>
                            </div>

                            <!-- Department -->
                            <div class="col-md-6">
                                <div class="form-floating-custom">
                                    <select id="department" name="department" required>
                                        <option value="" selected disabled></option>
                                        <option value="general">General Practitioner</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="ophthalmology">Ophthalmology</option>
                                        <option value="endocrinology">Endocrinology</option>
                                        <option value="pharmacy">Pharmacy Consultation</option>
                                    </select>
                                    <label for="department">Department</label>
                                </div>
                            </div>

                            <!-- Time Slot -->
                            <div class="col-md-6">
                                <div class="form-floating-custom">
                                    <select id="timeSlot" name="timeSlot" required>
                                        <option value="" selected disabled></option>
                                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                                        <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                                        <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                                    </select>
                                    <label for="timeSlot">Preferred Time</label>
                                </div>
                            </div>

                            <!-- Reason for Visit -->
                            <div class="col-12">
                                <div class="form-floating-custom">
                                    <textarea id="reason" name="reason" placeholder=" " required></textarea>
                                    <label for="reason">Reason for Visit</label>
                                </div>
                            </div>
                        </div>
                    </form>

                    <!-- Success Message (Hidden Initially) -->
                    <div class="success-message" id="successMessage">
                        <i class="bi bi-check-circle-fill"></i>
                        <h4>Appointment Booked Successfully!</h4>
                        <p>We'll contact you shortly to confirm your appointment details.</p>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" form="bookingForm" class="btn btn-book">
                        <i class="bi bi-check-lg me-2"></i>Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    </div>
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

// Function to initialize booking modal buttons
function initializeBookingButtons() {
    // Get the Book Now buttons from navbar
    const bookNowBtn = document.getElementById('bookNowBtn');
    const bookNowBtnMobile = document.getElementById('bookNowBtnMobile');
    
    // Add click event listeners
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
            modal.show();
        });
    }
    
    if (bookNowBtnMobile) {
        bookNowBtnMobile.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
            modal.show();
        });
    }
}

// Load navbar, footer, and booking modal
document.addEventListener('DOMContentLoaded', function() {
    // Insert navbar at the beginning of body
    const navbarContainer = document.getElementById('navbar-placeholder');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }
    
    // Insert booking modal into the body
    document.body.insertAdjacentHTML('beforeend', bookingModalHTML);
    
    // Insert footer at the end of body
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    // Set active navigation
    setActiveNav();
    
    // Initialize booking buttons
    initializeBookingButtons();

     // Wait a bit to ensure modal is loaded from components.js
    setTimeout(function() {
        const form = document.getElementById('bookingForm');
        const successMessage = document.getElementById('successMessage');
        const selects = document.querySelectorAll('.form-floating-custom select');
        const dateInput = document.getElementById('appointmentDate');
        const bookingModalElement = document.getElementById('bookingModal');
        
        if (!form || !successMessage || !dateInput || !bookingModalElement) {
            console.error('Modal elements not found. Make sure components.js loads first.');
            return;
        }
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        // Handle select changes to add/remove has-value class
        selects.forEach(select => {
            select.addEventListener('change', function() {
                const parent = this.closest('.form-floating-custom');
                if (this.value) {
                    parent.classList.add('has-value');
                } else {
                    parent.classList.remove('has-value');
                }
            });
        });
        
        // Handle date input
        dateInput.addEventListener('change', function() {
            const parent = this.closest('.form-floating-custom');
            if (this.value) {
                parent.classList.add('has-value');
            } else {
                parent.classList.remove('has-value');
            }
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                appointmentDate: document.getElementById('appointmentDate').value,
                department: document.getElementById('department').value,
                timeSlot: document.getElementById('timeSlot').value,
                reason: document.getElementById('reason').value
            };
            
            // Log form data (in production, send to server)
            console.log('Booking submitted:', formData);
            
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset form and close modal after 3 seconds
            setTimeout(() => {
                const modalInstance = bootstrap.Modal.getInstance(bookingModalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
                
                // Clean up backdrop and reset after modal closes
                setTimeout(() => {
                    // Remove any leftover backdrops
                    document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
                    document.body.classList.remove('modal-open');
                    document.body.style.removeProperty('overflow');
                    document.body.style.removeProperty('padding-right');
                    
                    // Reset form
                    form.reset();
                    form.style.display = 'block';
                    successMessage.style.display = 'none';
                    
                    // Remove has-value class from all containers
                    document.querySelectorAll('.form-floating-custom').forEach(el => {
                        el.classList.remove('has-value');
                    });
                }, 300);
            }, 3000);
        });
        
        // Reset form when modal is closed manually
        bookingModalElement.addEventListener('hidden.bs.modal', function() {
            // Remove any leftover backdrops
            document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
            
            // Reset form if it was submitted
            if (form.style.display === 'none') {
                form.reset();
                form.style.display = 'block';
                successMessage.style.display = 'none';
                
                document.querySelectorAll('.form-floating-custom').forEach(el => {
                    el.classList.remove('has-value');
                });
            }
        });
        
        // Add click event to all "Book Now" buttons on the page (for buttons outside navbar)
        document.querySelectorAll('.button, .about-button, .contact-button').forEach(button => {
            if (button.textContent.includes('Book Now')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const bookingModal = new bootstrap.Modal(bookingModalElement);
                    bookingModal.show();
                });
            }
        });
    }, 100);
});