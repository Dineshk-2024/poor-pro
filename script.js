// script.js
document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Display the QR code image
    document.getElementById('qr-code').style.display = 'block';
});
