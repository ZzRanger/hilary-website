import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const host = 'www.hilary-nguyen.com';
  const headers = {
    host,
    origin: `https://${host}`,
    'User-Agent': req.headers.get('User-Agent') || '',
  };
  const url = `${headers.origin}${req.nextUrl.pathname}`;
  const res = await fetch(url, {
    headers,
    body: req.body,
    method: req.method,
  });
  return new Response(res.body, {
    status: res.status,
    headers: { ...res.headers },
  });
}
