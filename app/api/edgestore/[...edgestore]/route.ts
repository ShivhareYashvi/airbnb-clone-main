// lib/edgestore.ts

import { initEdgeStore } from '@edgestore/server';

export const edgeStoreRouter = initEdgeStore.create().router({
  publicFiles: initEdgeStore.create().fileBucket({
    maxSize: 1024 * 1024 * 10, // 10 MB limit (optional)
    accept: ['image/*', 'application/pdf'], // customize as needed
  }),
});

export type EdgeStoreRouter = typeof edgeStoreRouter;
