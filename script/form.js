document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');
    const selects = document.querySelectorAll('.form-floating-custom select');
    const dateInput = document.getElementById('appointmentDate');
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
            const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
            modal.hide();
            
            // Reset form after modal closes
            setTimeout(() => {
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
    // Reset form when modal is closed
    document.getElementById('bookingModal').addEventListener('hidden.bs.modal', function() {
        if (form.style.display === 'none') {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
            
            document.querySelectorAll('.form-floating-custom').forEach(el => {
                el.classList.remove('has-value');
            });
        }
    });
    // Add click event to all "Book Now" buttons
    document.querySelectorAll('.button, .about-button, .contact-button').forEach(button => {
        if (button.textContent.includes('Book Now')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
                bookingModal.show();
            });
        }
    });
});