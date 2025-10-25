// Ensure the About tab is properly activated on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get the About tab button and content
    const aboutTab = document.getElementById('about-tab');
    const aboutContent = document.getElementById('about');
    
    if (aboutTab && aboutContent) {
        // Force activation of the About tab
        aboutTab.classList.add('active');
        aboutTab.setAttribute('aria-selected', 'true');
        
        // Force display of About content
        aboutContent.classList.add('show', 'active');
        
        // Ensure other tabs are deactivated
        const allTabs = document.querySelectorAll('.nav-tabs .nav-link');
        const allContents = document.querySelectorAll('.tab-pane');
        
        allTabs.forEach(tab => {
            if (tab.id !== 'about-tab') {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            }
        });
        
        allContents.forEach(content => {
            if (content.id !== 'about') {
                content.classList.remove('show', 'active');
            }
        });
    }
});