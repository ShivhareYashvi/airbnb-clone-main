// lib/edgestore.ts
'use client'
// lib/edgestore.ts

import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
import { initEdgeStore } from '@edgestore/server';
import { useState } from 'react';

// Initialize EdgeStore
const es = initEdgeStore.create();

// Create the router with your API
export const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(), // Example: configure file bucket
});

// Define and export the `useEdgeStore` hook
export function useEdgeStore() {
  const [store, setStore] = useState(null);

  // Logic for interacting with the store could go here
  // For example, fetching data from EdgeStore or uploading a file

  return { store, setStore };
}

// Export the router type
export type EdgeStoreRouter = typeof edgeStoreRouter;

