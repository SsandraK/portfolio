export async function GET() {
    return new Response(
      JSON.stringify({ VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
  