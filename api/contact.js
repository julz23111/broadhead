// api/contact.js (Node / server environment)

import { sendContactEmail } from '../form.js'; // adjust path to match your structure

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { name, email, phone, message } = req.body || {};
    const data = await sendContactEmail({ name, email, phone, message });
    return res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ ok: false, error: error.message });
  }
};