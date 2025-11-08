const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = '';
    
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.trim(),
      email: formData.get('email')?.trim(),
      phone: formData.get('phone')?.trim(),
      message: formData.get('message')?.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      statusEl.textContent = 'Please fill out name, email, and message.';
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      statusEl.textContent = 'Message sent! We’ll get back to you shortly.';
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'There was a problem sending your message. Please try again.';
    }
  });
}