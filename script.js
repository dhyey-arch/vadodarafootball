// script.js
document.getElementById('bookingForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const number = document.getElementById('number').value;

  document.getElementById('response').innerText =
    `✅ Thank you ${name}, your slot is booked for ${time} on ${date}. We'll contact you at ${number}.`;
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop default submit behavior

      const name = form.querySelector('input[type="text"]').value.trim();
      const phone = form.querySelector('input[type="tel"]').value.trim();
      const time = form.querySelector('select')?.value;

      if (name === '' || phone === '') {
        alert('Please fill in all fields.');
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      // ✅ Replace with your WhatsApp number (with country code, no + sign)
      const yourNumber = '916354280827'; // <-- Replace with your number

      const message = `Hi! I just booked a slot for Vadodara Football.\n\nName: ${name}\nPhone: ${phone}\nPreferred Time: ${time}`;
      const encodedMessage = encodeURIComponent(message);
      const waLink = `https://wa.me/${yourNumber}?text=${encodedMessage}`;

      window.open(waLink, '_blank');
    });
  }
});
