// Flo Faction LLC - Router & Event Handlers

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Flo Faction Router initialized');
        
        // Initialize all event handlers
        initContactButtons();
        initVoiceWidget();
    });
    
    // Handle contact form / quote request buttons
    function initContactButtons() {
        // Find all buttons with data-action="submit-contact"
        const contactButtons = document.querySelectorAll('[data-action="submit-contact"]');
        
        contactButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showContactModal();
            });
        });
        
        // Find call buttons
        const callButtons = document.querySelectorAll('[data-action="start-batch-call"]');
        
        callButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                initiateCall();
            });
        });
    }
    
    // Show contact modal
    function showContactModal() {
        // For now, redirect to contact section or show mailto link
        const email = 'flofaction.business@gmail.com';
        const subject = 'Quote Request from Flo Faction Website';
        const body = 'Hello, I would like to request a quote for your services.';
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    // Initiate phone call
    function initiateCall() {
        window.location.href = 'tel:+17725395908';
    }
    
    // Initialize voice widget interaction
    function initVoiceWidget() {
        // Check if ElevenLabs widget exists
        const widgetButton = document.querySelector('.widget-cta-button');
        
        if (widgetButton) {
            widgetButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Try to trigger the ElevenLabs widget
                const elevenLabsWidget = document.querySelector('elevenlabs-convai');
                
                if (elevenLabsWidget && elevenLabsWidget.click) {
                    elevenLabsWidget.click();
                } else {
                    // Fallback to contact
                    showContactModal();
                }
            });
        }
    }
    
})();
