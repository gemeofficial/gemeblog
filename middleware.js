export const config = {
    matcher: ['/blog/:path*'],
  };
  
  export default function middleware(request) {
    const url = new URL(request.url);
  
    if (url.pathname === '/blog/geme-vs-lomi') {
      return new Response(null, {
        status: 301,
        headers: {
          Location: 'https://gemebio.com/blogs/journal/geme-vs-lomi',
        },
      });
    }
  }