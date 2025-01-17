import { createBuilder } from "ultra/build.ts";
import { compile } from "./mdx.ts";

await compile("./content");

const builder = createBuilder({
  browserEntrypoint: import.meta.resolve("./client.tsx"),
  serverEntrypoint: import.meta.resolve("./server.tsx"),
});

builder
  .ignore("./public/*.png")
  .ignore("./content/*.mdx")
  .ignore("./README.md")
  .ignore("./fly.toml")
  .ignore("./Dockerfile")
  .ignore("./dev.ts");

// deno-lint-ignore no-unused-vars
const result = await builder.build();
