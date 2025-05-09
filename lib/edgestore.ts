// lib/edgestore.ts
'use client'
import { initEdgeStore } from '@edgestore/server';

// Create an instance of EdgeStore
const es = initEdgeStore.create();

// Create the router with your API
export const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(), // Configure the file bucket as needed
});

// Export the router type if needed elsewhere
export type EdgeStoreRouter = typeof edgeStoreRouter;
