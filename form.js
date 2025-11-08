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
    from: 'Broadhead Buddy &lt;james@broadhead-buddy.com&gt;',
    to: ['james@broadhead-buddy.com'],
    reply_to: email,
    subject: `New Broadhead Buddy inquiry from ${name}`,
    html: `
      &lt;h2&gt;New Inquiry from Broadhead Buddy site&lt;/h2&gt;
      &lt;p&gt;&lt;strong&gt;Name:&lt;/strong&gt; ${name}&lt;/p&gt;
      &lt;p&gt;&lt;strong&gt;Email:&lt;/strong&gt; ${email}&lt;/p&gt;
      ${phone ? `&lt;p&gt;&lt;strong&gt;Phone:&lt;/strong&gt; ${phone}&lt;/p&gt;` : ''}
      &lt;p&gt;&lt;strong&gt;Message:&lt;/strong&gt;&lt;/p&gt;
      &lt;p&gt;${message.replace(/\n/g, '&lt;br&gt;')}&lt;/p&gt;
    `,
  });

  if (error) {
    console.error('Resend email error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }

  return data;
}