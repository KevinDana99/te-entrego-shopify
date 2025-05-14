import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

// Workaround for SHOPIFY_APP_URL vs HOST env var
if (
  process.env.HOST &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.HOST)
) {
  process.env.SHOPIFY_APP_URL = process.env.HOST;
  delete process.env.HOST;
}

const host = new URL(process.env.SHOPIFY_APP_URL ?? "http://localhost")
  .hostname;

const hmrConfig =
  host === "localhost"
    ? {
        protocol: "ws",
        host: "localhost",
        port: 64999,
        clientPort: 64999,
        overlay: false,
      }
    : {
        protocol: "wss",
        host,
        port: parseInt(process.env.FRONTEND_PORT ?? "8002", 10),
        clientPort: 443,
        overlay: false,
      };

export default defineConfig({
  server: {
    port: Number(process.env.PORT ?? 3000),
    hmr: hmrConfig,
    fs: {
      allow: ["app", "node_modules"],
    },
  },

  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),

    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            { ssr: true, displayName: true, preprocess: false },
          ],
        ],
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [
      {
        find: /^styled-components$/,
        replacement: path.resolve(
          __dirname,
          "utils/styled-components-fix/index.ts",
        ),
      },
    ],
  },
  build: {
    target: "esnext",
    assetsInlineLimit: 0,
    minify: false,
  },

  ssr: {
    noExternal: ["styled-components"],
  },
} as UserConfig);
