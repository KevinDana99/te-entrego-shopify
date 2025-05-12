import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";
// Related: https://github.com/remix-run/remix/issues/2835#issuecomment-1144102176
// Replace the HOST env var with SHOPIFY_APP_URL so that it doesn't break the remix server. The CLI will eventually
// stop passing in HOST, so we can remove this workaround after the next major release.
if (
  process.env.HOST &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.HOST)
) {
  process.env.SHOPIFY_APP_URL = process.env.HOST;
  delete process.env.HOST;
}

const host = new URL(process.env.SHOPIFY_APP_URL || "http://localhost")
  .hostname;

let hmrConfig;
if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: 64999,
    clientPort: 64999,
    overlay: false,
  };
} else {
  hmrConfig = {
    protocol: "wss",
    host: host,
    port: parseInt(process.env.FRONTEND_PORT!) || 8002,
    clientPort: 443,
    overlay: false,
  };
}

export default defineConfig({
  server: {
    allowedHosts: [".ngrok-free.app"],
    port: Number(process.env.PORT || 3000),
    hmr: hmrConfig,
    fs: {
      // See https://vitejs.dev/config/server-options.html#server-fs-allow for more information
      allow: ["app", "node_modules"],
    },
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
    babel({
      babelConfig: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              ssr: true,
              displayName: process.env.NODE_ENV !== "production", // Solo habilitar displayName en desarrollo
              minify: process.env.NODE_ENV === "production", // Minificar en producción
              pure: true, // Eliminar las referencias no usadas
            },
          ],
        ],
      },
    }),
  ],
  build: {
    target: "esnext", // Asegúrate de que esté configurado para ESNext
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      "styled-components": "styled-components",
    },
  },
}) satisfies UserConfig;
