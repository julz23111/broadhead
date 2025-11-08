import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Call this from your server-side handler / API route.
// Example usage:
// await sendContactEmail({ name, email, phone, message });
export async function sendContactEmail({ name, email, phone, message }) {
  if (!name || !email || !message) {
    throw new Error('Missing required fields: name, email, and message are required.');
  }

  const { data, error } = await resend.emails.send({
    from: 'Broadhead Buddy <james@broadhead-buddy.com>',
    to: ['james@broadhead-buddy.com'],
    reply_to: email,
    subject: `New Broadhead Buddy inquiry from ${name}`,
    html: `
      <h2>New Inquiry from Broadhead Buddy site</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  if (error) {
    console.error('Resend email error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }

  return data;
}