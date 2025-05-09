import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
import { initEdgeStore } from '@edgestore/server';
import { useState } from 'react';

// Initialize EdgeStore
const es = initEdgeStore.create();

// Create the router with your API
export const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});

// Define and export the `useEdgeStore` hook
export function useEdgeStore() {
  const [edgestore, setEdgestore] = useState(null);

  // Logic for interacting with the store could go here (e.g., fetching data, uploading)
  
  // Example: setting the store on first load
  if (!edgestore) {
    setEdgestore(es);
  }

  return { edgestore, setEdgestore };
}

// Export the router type
export type EdgeStoreRouter = typeof edgeStoreRouter;
