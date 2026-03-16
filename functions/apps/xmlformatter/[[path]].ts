import { proxyRequest } from '../../_shared/proxy';

export const onRequest: PagesFunction = async (context) => {
  return proxyRequest(
    context.request,
    'https://xmlformatterweb.ryou-arinko.workers.dev',
    '/apps/xmlformatter'
  );
};
