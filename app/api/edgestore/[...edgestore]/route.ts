import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});

export { handler as GET, handler as POST };

export type EdgeStoreRouter = typeof edgeStoreRouter;
// pages/api/edgestore/[...edgestore].ts

export default function handler(req, res) {
  // your logic here
  res.status(200).json({ message: 'Edge store handler' });
}
