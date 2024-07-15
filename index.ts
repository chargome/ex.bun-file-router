import './instrument';

console.log("Hello via Bun!");

// 1. Import node-file-router
import { initFileRouter } from 'node-file-router';

// 2. Initialize the main request handler
const useFileRouter = await initFileRouter();

// 3. Start serving server and attach request handler to fetch
const server = Bun.serve({
  port: 3123,
  fetch: async (req) => {
    const res = await useFileRouter<Response>(req);
    return res || new Response('No Response is provided', { status: 500 });
  }
});

console.log(`Listening on http://localhost:${server.port}`);
