import build from "ultra/build.ts";

const result = await build({
  browserEntrypoint: import.meta.resolve("./client.tsx"),
  serverEntrypoint: import.meta.resolve("./server.tsx"),
});

console.log(result);