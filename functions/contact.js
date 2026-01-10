export async function onRequestPost({ request }) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return new Response("Invalid request.", { status: 400 });
  }

  const { name, email, message, company, "form-start": formStart } = body;

  if (company) {
    return new Response("Spam detected.", { status: 400 });
  }

  const startTime = Number(formStart);
  if (!Number.isNaN(startTime)) {
    const elapsed = Date.now() - startTime;
    if (elapsed < 3000) {
      return new Response("Please try again.", { status: 429 });
    }
  }

  if (!name || !email || !message) {
    return new Response("Missing required fields.", { status: 400 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
