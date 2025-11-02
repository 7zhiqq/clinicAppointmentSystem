# Clinic Appointment Website

A modern, responsive healthcare website for a Clinic featuring comprehensive medical services, doctor profiles, and appointment booking functionality.

## 🏥 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Service Pages**: Dedicated pages for Pharmacy, Ophthalmology, Pediatrics, Endocrinology, and General Practitioners
- **Doctor Profiles**: Detailed profile pages with tabs for About, Education, Experience, and Licenses
- **Appointment Booking**: Interactive modal form for booking appointments with form validation
- **Smooth Animations**: Fade-in animations and hover effects for enhanced user experience
- **FAQ Section**: Accordion-style frequently asked questions
- **Contact Information**: Embedded Google Maps and complete contact details

## 📁 Project Structure

```
westpoint-clinic/
├── index.html              # Homepage
├── about.html              # About Us page
├── contact.html            # Contact page
├── doctors.html            # Doctors listing page
├── pharmacy.html           # Pharmacy services
├── ophthamology.html       # Ophthalmology services
├── pediatrics.html         # Pediatrics services
├── endocrinology.html      # Endocrinology services
├── practitioners.html      # General Practitioners
├── profile-doctor1.html    # Dr. Olivia Hayes (Pediatrician)
├── profile-doctor2.html    # Dr. Emily Carter (GP)
├── profile-doctor3.html    # Dr. James Walker (Pediatrician)
├── profile-doctor4.html    # Dr. Sophia Robinson (GP)
├── profile-doctor5.html    # Dr. Michael Anderson (Endocrinologist)
├── profile-doctor6.html    # Dr. Samuel Davis (Ophthalmologist)
├── profile-doctor7.html    # Dr. Emma Parker (GP)
├── profile-doctor8.html    # Dr. Ethan Johnson (Ophthalmologist)
├── profile-pharmacist.html # Jairah Uy, RPh (Pharmacist)
├── css/
│   └── main.css           # Main stylesheet
├── script/
│   ├── components.js      # Navbar, footer, and booking modal
│   ├── navbar.js          # Navbar scroll effects
│   ├── fade.js            # Fade-in animations
│   ├── form.js            # Form handling
│   └── profile-tabs.js    # Profile page tab management
└── img/                   # Images directory
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a static website using:
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.8
- Bootstrap Icons 1.13.1
- Google Fonts (Inter)

## 🎨 Customization

### Colors

Update the CSS variables in `css/main.css`:

```css
:root {
  --primary-color: #0523af;      /* Main brand color */
  --primary-dark: #031a82;       /* Darker shade */
  --primary-light: #dce9fc;      /* Lighter shade */
  --white: #ffffff;
  --text-dark: #0a0a0a;
  --text-muted: #555;
}
```

### Logo

Replace `img/westpoint.png` with your clinic's logo. Recommended dimensions: 200x50px

### Contact Information

Update contact details in `script/components.js`:
- Address
- Phone numbers
- Email address

### Doctor Profiles

Add new doctors by:
1. Duplicating an existing profile HTML file
2. Updating the content with new doctor information
3. Adding the doctor card to `doctors.html`

## 📱 Pages Overview

### Homepage (`index.html`)
- Hero section with call-to-action
- Features overview
- About section preview
- Services carousel
- FAQ accordion

### About Us (`about.html`)
- Mission and vision statements
- Core values
- Feature highlights

### Doctors (`doctors.html`)
- Grid layout of all medical staff
- Links to individual profile pages

### Services Pages
- Pharmacy
- Ophthalmology
- Pediatrics
- Endocrinology
- General Practitioners

### Contact (`contact.html`)
- Contact form
- Embedded Google Maps
- Contact information

### Doctor Profiles
- Professional profile
- Educational background
- Work experience
- Licenses and certifications
- Tab navigation

## 🔧 Key Features

### Appointment Booking Modal
- Floating label inputs
- Date validation (no past dates)
- Department selection
- Time slot selection
- Form submission with success message

### Navigation
- Sticky header with scroll effect
- Active page highlighting
- Mobile-responsive hamburger menu
- Dropdown for services

### Animations
- Fade-in on scroll using Intersection Observer
- Smooth transitions on hover
- Card lift effects

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary and confidential. All rights reserved by WestPoint Clinic.

## 👥 Credits

- **Design & Development**: Kheishia Faith Mationg
- **Bootstrap**: v5.3.8
- **Bootstrap Icons**: v1.13.1
- **Google Fonts**: Inter family

## 🔄 Future Enhancements

- [ ] Backend integration for appointment booking
- [ ] Patient portal
- [ ] Online prescription refills
- [ ] Blog section for health tips
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Dark mode toggle

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
