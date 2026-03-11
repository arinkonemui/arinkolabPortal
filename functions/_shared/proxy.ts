export async function proxyRequest(
  request: Request,
  originBase: string,
  pathPrefix: string
): Promise<Response> {
  const url = new URL(request.url);
  const targetPath = url.pathname.replace(new RegExp(`^${pathPrefix}`), '') || '/';
  const targetUrl = `${originBase}${targetPath}${url.search}`;

  const headers = new Headers(request.headers);
  headers.delete('host');

  const response = await fetch(targetUrl, { method: request.method, headers });

  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cache-Control', 'public, max-age=3600');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
