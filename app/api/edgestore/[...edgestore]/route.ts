// app/api/edgestore/[...edgestore]/route.ts

import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { initEdgeStore } from "@edgestore/server";

// Initialize EdgeStore
const es = initEdgeStore.create();

// Define your router
const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});

// Create the handler
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

// Export GET and POST for App Router API routes
export { handler as GET, handler as POST };

// Optionally export type for client use
export type EdgeStoreRouter = typeof edgeStoreRouter;
