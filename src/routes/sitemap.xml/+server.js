export const GET = async () => {
    const markup = "<xml><h1>Business</h1></xml>";
  
    return new Response(markup, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  };