// app/api/edgestore/[...edgestore]/route.ts

import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
import { edgeStoreRouter } from '@/lib/edgestore'; // Adjust path if needed

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export { handler as GET, handler as POST };
